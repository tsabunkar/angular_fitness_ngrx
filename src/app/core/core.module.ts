import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { CustomMaterialModule } from '../shared/modules/material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SideNavComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    // CommonModule,
    RouterModule,
    // FlexLayoutModule,
    // CustomMaterialModule
    SharedModule, // *Instead of exporting all the commnly used modules separately, directly import shared
    // * module which has imported all these commonly used module in it
    ReactiveFormsModule // Only used in login Component
  ],
  exports: [
    SideNavComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
  ]
})
export class CoreModule { }
// ! This CoreModule contains the global component-files, statically used across the entire application.
// !These files will appear on every page in the application.
