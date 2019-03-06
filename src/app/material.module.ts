import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule, // you must import one of the following modules at your
    // application root: MatNativeDateModule, MatMomentDateModule, or provide a custom implementation.
    MatCheckboxModule
  ],
  declarations: [],
  providers: [],
})
export class CustomMaterialModule { }
