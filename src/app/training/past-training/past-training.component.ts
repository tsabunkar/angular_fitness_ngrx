import { Component, OnInit, ChangeDetectorRef, OnChanges, ViewChild, AfterViewInit } from '@angular/core';
import { Exercise } from '../exercise.model';
import { mockExercises } from 'src/app/core/mocks/exercise.mock';
import { TrainingService } from '../training.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-past-training',
  // templateUrl: './past-training-table.component.html',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, AfterViewInit {

  displayedColumns = ['exerciseId', 'exerciseName', 'exerciseDuration', 'caloriesBurned', 'date', 'exerciseState'];
  // exercises: Exercise[] = mockExercises;
  // !No need to mention Exercise[] array in the genrics, by default angular material expect it to be [] :- MatTableDataSource<Exercise>()
  exercises = new MatTableDataSource<Exercise>();
  // $exercises: Observable<Exercise[]>;
  @ViewChild('toogleSlider') toogleSlider;
  @ViewChild(MatSort) matSort: MatSort;
  @ViewChild(MatPaginator) matPaginator: MatPaginator;

  constructor(
    private trainingService: TrainingService
  ) { }

  ngOnInit() {
    // console.log('toogleSlider', this.toogleSlider);
    // this.$exercises = this.trainingService.historyChanged;
    this.trainingService.historyChanged.subscribe(ex => this.exercises.data = ex);

  }

  ngAfterViewInit() {
    this.exercises.sort = this.matSort;
    this.exercises.paginator = this.matPaginator;
  }

  onToggle() {
    this.exercises.data = this.trainingService.getCompletedHistoryExercises();
    // this.$exercises = this.trainingService.getCompletedHistoryExercises();
  }

  doFilter(inputText: string) {
    this.exercises.filter = inputText.trim().toLowerCase();
  }




}
