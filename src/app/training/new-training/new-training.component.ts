import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  cardColor: Boolean;
  // @Output() trainingStart = new EventEmitter<void>();
  exercises: Exercise[];
  // @ViewChild('exerciseOptionSelected') selectedOption;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exercises = this.trainingService.getAvaliableExercise();
  }

  onStartNewTraning(exerciseSelected) {

    // console.log(this.selectedOption.value);
    // this.trainingStart.emit();
    this.trainingService.startExercise(exerciseSelected);
  }

}
