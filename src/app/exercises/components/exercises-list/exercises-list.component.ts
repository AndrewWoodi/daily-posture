import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Exercise } from '../../../core/exercise.model';

@Component({
  selector: 'app-exercises-list',
  templateUrl: './exercises-list.component.html',
  styleUrls: ['./exercises-list.component.scss']
})
export class ExercisesListComponent  {
  @Input() exercises: Exercise[];
  @Output() exerciseDeleted = new EventEmitter<Exercise>();
  @Output() addExerciseClicked = new EventEmitter();

  onExerciseDeleted(exercise: Exercise): void {
    this.exerciseDeleted.emit(exercise);
  }

  onAddExerciseClicked(): void {
    this.addExerciseClicked.emit();
  }

}
