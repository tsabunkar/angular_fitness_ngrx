import { Exercise } from 'src/app/training/exercise.model';

export const mockExercises: Exercise[] = [
  {
    exerciseId: '1',
    exerciseName: 'Crunches',
    exerciseDuration: 30,
    caloriesBurned: 10
  },
  {
    exerciseId: '2',
    exerciseName: 'Abs',
    exerciseDuration: 120,
    caloriesBurned: 40
  },
  {
    exerciseId: '3',
    exerciseName: 'Lunges',
    exerciseDuration: 40,
    caloriesBurned: 20
  },
  {
    exerciseId: '4',
    exerciseName: 'Cardio',
    exerciseDuration: 50,
    caloriesBurned: 200
  },
  {
    exerciseId: '5',
    exerciseName: 'Pushups',
    exerciseDuration: 10,
    caloriesBurned: 25
  }
];
