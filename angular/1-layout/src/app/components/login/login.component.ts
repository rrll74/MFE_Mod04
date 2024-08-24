import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '@/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  editForm!: FormGroup;
  nameControl!: FormControl;
  passControl!: FormControl;

  private router = inject(Router);

  constructor(private authService: AuthService, private fb: FormBuilder) {
    if (authService.isLogged()) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit(): void {
    this.createEditForm();
  }

  createEditForm(): void {
    this.nameControl = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.passControl = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]);

    this.editForm = this.fb.group({
      username: this.nameControl,
      password: this.passControl,
    });
  }

  login(): void {
    if (this.editForm.valid) {
      this.authService.login(this.nameControl.value, this.passControl.value);
    }
  }
}
