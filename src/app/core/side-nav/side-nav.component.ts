import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(private authService: AuthService) { }
  $authenticated: Observable<boolean>;

  @Input() sideNavigation;

  ngOnInit() {
    this.$authenticated = this.authService.userAuthenticationChanged.pipe(
      startWith(false) // Assign initial value to  $authenticated, as we cannot assing like this -
      //  $authenticated = Observable<false>
    );

  }

  onLogout() {
    this.authService.logout();
    this.closeSideNav();
  }

  closeSideNav() {
    this.sideNavigation.close();
  }
}
