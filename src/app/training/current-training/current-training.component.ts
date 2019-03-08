import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { delay } from 'q';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  @Output() trainingExit = new EventEmitter();
  spinnerProgress: any = 0;
  currentSpinnerInterval;

  constructor(private dialogComponent: MatDialog) { }

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
        this.spinnerProgress = 0;
        this.trainingExit.emit();

      } else {
        this.startOrResumeTraning();
      }
    });


  }


  startOrResumeTraning() {
    this.currentSpinnerInterval = setInterval(() => {
      this.spinnerProgress = +this.spinnerProgress + 5;
      if (this.spinnerProgress >= 100) {
        // TO stop this setInterval() js method use -> clearInterval()
        clearInterval(this.currentSpinnerInterval);
      }
    }, 1000);
  }


}
