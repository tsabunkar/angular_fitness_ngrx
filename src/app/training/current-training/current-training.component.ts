import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { delay } from 'q';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  // @Output() trainingExit = new EventEmitter();
  spinnerProgress: any = 0;
  currentSpinnerInterval;
  exercise: string;

  constructor(
    private dialogComponent: MatDialog,
    private trainingService: TrainingService
  ) { }

  ngOnInit() {
    this.startOrResumeTraning();

  }

  onStopCurrentExercies() {
    clearInterval(this.currentSpinnerInterval);
    // Confirmation dialog is opened
    const dialogReference = this.dialogComponent.open(ConfirmDialogComponent, {
      width: '250px',
      data: { progressData: this.spinnerProgress } // passing data from this component to dialog Component -> (ConfirmDialogComponent)
    });

    // After dailog is closed
    dialogReference.afterClosed().subscribe(dailogClosedValue => {
      console.log('The dialog was closed', dailogClosedValue);
      if (dailogClosedValue['isStopped']) {
        // this.spinnerProgress = 0;
        // this.trainingExit.emit();
        this.trainingService.exerciseCancelled(this.spinnerProgress);

      } else {
        this.startOrResumeTraning();
      }
    });


  }


  startOrResumeTraning() {
    let timeIntervalForExerciseInStep;
    if (this.trainingService.getOnGoingTraining()) {
      // timeIntervalForExerciseInStep = this.trainingService.getOnGoingTraining().exerciseDuration / 100;
      const { exerciseDuration, exerciseName } = this.trainingService.getOnGoingTraining();
      timeIntervalForExerciseInStep = exerciseDuration / 100;
      this.exercise = exerciseName;
    }


    this.currentSpinnerInterval = setInterval(() => {
      this.spinnerProgress = +this.spinnerProgress + 1;
      if (this.spinnerProgress >= 100) {
        // TO stop this setInterval() js method use -> clearInterval()
        this.trainingService.exerciseCompleted();
        clearInterval(this.currentSpinnerInterval);
      }
    }, timeIntervalForExerciseInStep * 1000);
  }


}
