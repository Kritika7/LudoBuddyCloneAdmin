import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  hide = true;
  updateName!: FormGroup;
  updatePassword!:FormGroup;
  nameSubmitted = false;
  passwordSubmitted = false;

  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.updateName = this.formBuilder.group({
      name:['', Validators.required]
    });
    this.updatePassword = this.formBuilder.group({
      password:['', Validators.required]
    });

  }

  get f(){
    return this.updateName.controls;
  }

  get k(){
    return this.updatePassword.controls;
  }

  onUpdateName(){
    this.nameSubmitted = true;

    if(this.updateName.invalid){
      return;
    }

  }


  onUpdatePassword(){
    this.passwordSubmitted = true;

    if(this.updatePassword.invalid){
      return;
    }

  }
  }


