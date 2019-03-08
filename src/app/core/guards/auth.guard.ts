import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

// !Guard is used to protect or safeguard the routes
// !i.e- only specific user has right/privilige to navigate or route to pariticular url
// !Can used for- role based authenication
@Injectable({ providedIn: 'root' }) // Providing this AUthGuard Service to RootModule-AppModule, since
// we want entier application to have single instance of AuthGuard Service

export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  // ActivatedRouteSnapshot -> rout which we r trying to active
  // this canActivate() method must reutrn an Observable which return true/false
  // or an Promise which can be resolved or rejected to true/false

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('From Auth Guard service', this.authService.isAuthenticated());
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/signin']);
      // return false;
    }

  }

}
