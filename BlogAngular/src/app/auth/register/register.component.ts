import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { ProviderAst } from '@angular/compiler';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  showSuccessMessage = false;
  serverErrorMessages: string;

  constructor(
    private registerService: RegisterService,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit() {}

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  registerUser() {
    this.submitted = true;

    if (this.registerForm.valid) {
      this.registerService.postuser(this.registerForm.value).subscribe(
        response => {
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 5000);
          this.resetForm();
        },
        error => {
          console.log(error);
          if (error.status === 422) {
            this.serverErrorMessages = error.error.join();
          } else {
            this.serverErrorMessages = 'Oops, something went wrong!';
          }
        }
      );
    }
  }

  resetForm() {
    this.registerForm.reset();
    this.serverErrorMessages = '';
    this.registerForm = this.formBuilder.group({
      fullName: [''],
      email: [''],
      password: ['']
    });
  }
}
