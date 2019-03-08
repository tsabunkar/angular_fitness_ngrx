export interface Exercise {
  exerciseId: string;
  exerciseName: string;
  exerciseDuration: number;
  caloriesBurned: number;
  date?: Date;
  // ?exerciseState can be of type string only->(completed or cancelled) or null type
  exerciseState?: 'completed' | 'cancelled' | null;
}
