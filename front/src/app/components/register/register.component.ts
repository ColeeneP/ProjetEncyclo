import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'appcp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  hide = true;
  responseServer = null;
  email = new FormControl('', [Validators.required, Validators.email]);
  public registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(2)]),
      firstname: this.formBuilder.control('', [Validators.required, Validators.minLength(2)]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required, Validators.pattern('"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"')]), // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
      bio: this.formBuilder.control('', [Validators.minLength(10)]),
    })
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onRegister(): void {
    // const formOnRegister = {
    //   name: this.registerForm.get('name').value,
    //   firstname: this.registerForm.get('firstname').value,
    //   email: this.registerForm.get('email').value,
    //   password: this.registerForm.get('password').value,
    //   bio: this.registerForm.get('bio').value,
    // }
    // this.userService.newUser(formOnRegister).subscribe(
    //   result => {
    //     console.log(result);
    //     this.responseServer = result;
    //     this.isAuth$.next(true),
    //     this.router.navigate(['showPostComponent'])
    //   },
    //   error =>
    //     this.responseServer = error.error.message
    // )
  };

}
