import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { mockExercises } from '../core/mocks/exercise.mock';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private avaliableExercises: Exercise[] = mockExercises;
  private currentlyRunningExercise: Exercise;
  public exerciseChanged = new Subject<Exercise>();

  constructor() { }

  public getAvaliableExercise(): Exercise[] {
    return this.avaliableExercises.slice();
    // return [...this.avaliableExercises];
  }

  startExercise(exerciseId: string) {
    /*  const userSelectedExercise = this.avaliableExercises.find(exercise => {
       return exercise.exerciseId === exerciseId;
     });
     this.currentlyRunningExercise = userSelectedExercise; */
    // *Shorthand
    this.currentlyRunningExercise = this.avaliableExercises.find(exercise => exercise.exerciseId === exerciseId);
    this.exerciseChanged.next({ ...this.currentlyRunningExercise });
  }

  getOnGoingTraining(): Exercise {
    return { ... this.currentlyRunningExercise };
  }



}
