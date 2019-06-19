import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  serverErrorMessages = '';
  showSuccessMessage = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit() {}

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  submitForm() {
    this.submitted = true;

    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe(
        (response) => {
          this.loginService.setToken(response['token']);
          this.loginService.setUserInfo(response['info']);
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 2000);
          this.router.navigateByUrl('/dashboard');
        },
        (error) => {
          this.serverErrorMessages = error.error['message'];
        }
      );
    }
  }
}
