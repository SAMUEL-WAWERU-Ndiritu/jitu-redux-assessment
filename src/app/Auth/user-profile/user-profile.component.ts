
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorComponent } from 'src/app/error/error.component';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/Interfaces';
import { AppState } from 'src/app/State/appState';
import { selectUser } from 'src/app/State/Actions/usersActions';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,ErrorComponent],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user!: User;
  form!: FormGroup;
name: any;
email: any;
  checkPasswords: any;

  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectUser).subscribe(user => {
      this.user = user;
      this.initializeForm();
    });
  }

  initializeForm(): void {
    this.form = this.fb.group({
      name: [this.user.Name, Validators.required],
      email: [this.user.Email, [Validators.required, Validators.email]],
      password: ['', Validators.minLength(8)],
      confirmPassword: ['']
    });
  }



  updateProfile(): void {
    const { name, email, password } = this.form.value;
    const updatedUser = { ...this.user, name, email, password };
    this.store.dispatch(new updatedUser(updatedUser));
  }
}