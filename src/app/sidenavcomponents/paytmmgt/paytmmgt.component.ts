import { Component, OnInit, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-paytmmgt',
  templateUrl: './paytmmgt.component.html',
  styleUrls: ['./paytmmgt.component.scss']
})
export class PaytmmgtComponent implements OnInit {
  submitForm!: FormGroup;
  verifyForm!: FormGroup;
  submitted = false;
  verified = false;

  @ViewChild('table')
  table!: MatTable<Element>;
  displayedColumns = ['mobile', 'bank', 'wallet'];


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.submitForm = this.formBuilder.group({
      mobile:['', Validators.required],
      password:['', Validators.required],
    });
    this.verifyForm = this.formBuilder.group({
      mobile:['', Validators.required],
      otp:['', Validators.required],
      upi:['', Validators.required],
      account:['', Validators.required]
    });
  }

  get f(){
    return this.submitForm.controls;

  }

  get k(){
    return this.verifyForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.submitForm.invalid){
      return;
    }
  }

  onVerify(){
    this.verified = true;
    if(this.verifyForm.invalid){
      return;
    }
  }
}
