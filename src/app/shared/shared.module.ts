import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    CustomMaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    CustomMaterialModule
  ]
})
export class SharedModule { }
// !Exporting all the commonly used modules by other Modules like - CommonModule, FormsModule, CustomMaterialModule
// !It contains all the commonly used directives, pipes, models, etc which are shared by different module
