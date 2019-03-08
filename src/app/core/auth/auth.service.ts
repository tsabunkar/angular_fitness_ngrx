import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { AuthData } from './models/auth-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root' // Providing the service in rootMOdule,
  // make sures that we are using single ton/same instances of AuthService
})
export class AuthService {

  private user: User;
  public userAuthenticationChanged = new Subject<boolean>();

  constructor(private router: Router) { }

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.userAuthenticationChanged.next(true); // logged in
    // navigate after registering the user
    this.navigateToTraining();
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.userAuthenticationChanged.next(true); // logged in
    // navigate after login the user
    this.navigateToTraining();
  }

  logout() {
    this.user = null;
    this.userAuthenticationChanged.next(false); // logged out
    // navigate after logout the user
    this.router.navigate(['/signin']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuthenticated() {
    return this.user != null;
  }

  private navigateToTraining() {
    this.router.navigate(['/training']);
  }

}
