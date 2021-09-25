import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'appcp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  responseServer = null;
  isAuth$ = new Boolean(false);
  loading!: boolean;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required, Validators.pattern('"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"')]) // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    })
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onLogin(): void {
    // const formOnLogin = {
    //   email: this.loginForm.get('email').value,
    //   password: this.loginForm.get('password').value
    // }
    // this.userService.logUser(formOnLogin).subscribe(
    //   result => {
    //     localStorage[`session`] = JSON.stringify(result),
    //     this.isAuth$.next(true),
    //     this.router.navigate(['/showPostComponent'])},
    //     error => {
    //       this.responseServer = error.error.message }
    // )}
    
  }};
