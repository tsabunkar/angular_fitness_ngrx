import { Component, OnInit, ChangeDetectorRef, OnChanges, ViewChild } from '@angular/core';
import { Exercise } from '../exercise.model';
import { mockExercises } from 'src/app/core/mocks/exercise.mock';
import { TrainingService } from '../training.service';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-past-training',
  // templateUrl: './past-training-table.component.html',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit {

  displayedColumns = ['exerciseId', 'exerciseName', 'exerciseDuration', 'caloriesBurned', 'date', 'exerciseState'];
  // exercises: Exercise[] = mockExercises;
  // exercises = new MatTableDataSource<Exercise>();
  $exercises: Observable<Exercise[]>;
  @ViewChild('toogleSlider') toogleSlider;

  constructor(
    private trainingService: TrainingService
  ) { }

  ngOnInit() {
    // console.log('toogleSlider', this.toogleSlider);
    this.$exercises = this.trainingService.historyChanged;
    // this.exercises = this.trainingService.getCompletedHistoryExercises();
  }

  onToggle() {
    this.$exercises = this.trainingService.getCompletedHistoryExercises();
  }




}
