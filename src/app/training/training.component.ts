import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainingService } from './training.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {

  onGoingTraning: Boolean = false;
  subscription: Subscription;

  constructor(
    private trainingService: TrainingService
  ) { }

  ngOnInit() {
    this.subscription = this.trainingService.exerciseChanged.subscribe(exercise => {
      console.log(exercise);
      if (exercise) {
        this.onGoingTraning = true;
      } else {
        this.onGoingTraning = false;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
