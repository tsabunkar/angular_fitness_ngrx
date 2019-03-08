import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

import { TrainingComponent } from './training/training.component';
import { SignupComponent } from './core/auth/signup/signup.component';
import { LoginComponent } from './core/auth/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: LoginComponent },

  // { path: 'training', component: TrainingComponent },
  // ?Can we have to protect this /training route, so using guard ->
  { path: 'training', component: TrainingComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // !Exporting the RouterModule where we have configured our Routes
  // !This will be indirectly be exporting AppRoutingModule in AppModule
})
export class AppRoutingModule {

}
