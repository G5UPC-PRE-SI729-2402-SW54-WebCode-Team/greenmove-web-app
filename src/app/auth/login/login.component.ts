import { Component, inject, NgModule, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MyErrorStateMatcher } from '../register/register.component';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Role } from '../interfaces/IUser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  authService = inject(AuthService);
  loginForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  isOwner: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit(): void {}
  toGoRegister(): void {
    this.router.navigate(['/register']);
  }
  toGoLogin(): void {
    console.log('this login form', this.loginForm.value.isOwner, Role.Owner);
    this.authService
      .login({
        username: this.loginForm.value.name,
        password: this.loginForm.value.password,
      })
      .then((response) => {
        if (response) {
          this.router.navigate(['/']);
        }
      });
  }
  selectUser(event: any): void {
    this.isOwner = event.checked;
    console.log('this', this.isOwner);
  }
}
