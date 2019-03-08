import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  maxDate: Date;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.signupPersonShouldBeEighteenYears();

  }

  signupPersonShouldBeEighteenYears() {
    // logic - Person signup, should be min of years old, so limiting the date beyond 2001 and soon
    this.maxDate = new Date();
    console.log(this.maxDate.getFullYear() - 18);
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    console.log(form);
    // Register new user
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }
}
