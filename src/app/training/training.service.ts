import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { mockExercises } from '../core/mocks/exercise.mock';
import { Subject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private avaliableExercises: Exercise[] = mockExercises;
  private currentlyRunningExercise: Exercise;
  private completedHistoryExercises: Exercise[] = [];
  public exerciseChanged = new Subject<Exercise>();
  public historyChanged = new Subject<Exercise[]>();

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

  exerciseCompleted() {
    this.completedHistoryExercises.push({
      ...this.currentlyRunningExercise,
      date: new Date(),
      exerciseState: 'completed'
    });

    this.historyChanged.next([...this.completedHistoryExercises]);
    this.currentlyRunningExercise = null;
    this.exerciseChanged.next(null);
  }

  exerciseCancelled(progress: number) {
    this.completedHistoryExercises.push({
      ...this.currentlyRunningExercise,
      exerciseDuration: this.currentlyRunningExercise.exerciseDuration * (progress / 100),
      caloriesBurned: this.currentlyRunningExercise.caloriesBurned * (progress / 100),
      date: new Date(),
      exerciseState: 'cancelled'
    });

    this.historyChanged.next([...this.completedHistoryExercises]);
    this.currentlyRunningExercise = null;
    this.exerciseChanged.next(null);
  }

  getCompletedHistoryExercises(): Observable<Exercise[]> {
    return of([...this.completedHistoryExercises]);
  }


}
