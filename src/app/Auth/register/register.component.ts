import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/Interfaces';
import { Observable } from 'rxjs';
import { adduser } from 'src/app/State/Actions/usersActions';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  form!:FormGroup
  user$!:Observable<User[]>
  constructor(private fb:FormBuilder,private authentication:AuthenticationService, private router:Router, private store:Store<any>){

  }
  ngOnInit(): void {
    this.form = this.fb.group({
      Name:[null, Validators.required],
      Email:[null, [Validators.required, Validators.email]],
      Password:[null, Validators.required]
    })
  }
  submitForm(){
    // this.authentication.registerUser(this.form.value).subscribe(response=>{
    //   console.log(response);
    //   this.router.navigate(['login'])

    this.store.dispatch(adduser({newuser:this.form.value}))
      this.store.dispatch(getuser())   


    }
  }

function getuser(): any {
  throw new Error('Function not implemented.');
}

