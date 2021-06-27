import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
signupForm?: FormGroup;
  constructor(private fb: FormBuilder) { 
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name:['', Validators.required],
      phone:['', Validators.required],
      password:['', Validators.required],
      otp:['', Validators.required],
    })
  }

  getTOIP(){
    
  }

  onSubmit(){}

}
