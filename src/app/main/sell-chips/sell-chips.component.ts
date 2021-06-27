import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sell-chips',
  templateUrl: './sell-chips.component.html',
  styleUrls: ['./sell-chips.component.scss']
})
export class SellChipsComponent implements OnInit {
  updateForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      amount:['', Validators.required],
      mobile:['', Validators.required]
    });
  }

  get f(){
    return this.updateForm.controls;
  }

  onUpdate(){
    this.submitted = true;

    if(this.updateForm.invalid){
      return;
    }

  }
}
