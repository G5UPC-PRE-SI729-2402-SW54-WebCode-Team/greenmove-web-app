import { Component, inject, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroupDirective,
  NgForm,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthService } from '../services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  city: FormControl;
  matcher = new MyErrorStateMatcher();
  private isOwnerSubject = new BehaviorSubject<boolean>(false);
  isOwner: boolean = false;
  authService = inject(AuthService);
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.city = new FormControl('');
    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', [Validators.required, Validators.minLength(6)]],
      lastName: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      urlImage: [''],
      city: [''],
    });
  }
  ngOnInit(): void {}
  goToLogin() {
    this.router.navigate(['./login']);
  }
  sendRegister() {
    console.log('form', this.registerForm.value);
    const request = {
      username: this.registerForm.value['userName'],
      password: this.registerForm.value['password'],
      roles: [this.isOwner ? 'ROLE_OWNER' : 'ROLE_TENANT'],
    };

    const requestTenat = {
      firstName: this.registerForm.value['firstName'],
      lastName: this.registerForm.value['lastName'],
      urlImage:
        'https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg',
      phone: this.registerForm.value['phone'],
    };
    const requestOwner = {
      firstName: this.registerForm.value['firstName'],
      lastName: this.registerForm.value['lastName'],
      urlImage:
        'https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg',
      phone: this.registerForm.value['phone'],
      city: this.registerForm.value['city'],
    };

    this.authService.register(request).then((response) => {
      const requestSend = this.isOwner ? requestOwner : requestTenat;
      this.authService
        .putUser(requestSend, response.id, this.isOwner ? 'owner' : 'tenant')
        .then((response) => {
          if (response) {
            this.goToLogin();
          }
        });
    });
  }
  onFileSelected(event: Event): void {
    console.log('event', event.target);
    const input: any = event.target;
    const file = input.files[0];
    this.registerForm.get('urlImage')?.setValue(file.name);
  }
  onToggleChange(event: any): void {
    const newValue = event.checked;
    this.isOwner = newValue;
  }
}
