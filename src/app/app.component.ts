import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'signup-form';
  signupform = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  get username() {
    return this.signupform.get('username');
  }

  get email() {
    return this.signupform.get('email');
  }

  get password() {
    return this.signupform.get('password');
  }

  login() {
    console.log(this.signupform.controls);
  }
}
