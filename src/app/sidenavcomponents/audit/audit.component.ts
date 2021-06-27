import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {
  form!: FormGroup;
  selectedNumber: string = "select";

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.form = this._formBuilder.group({
      startDate: [{ value: '', disabled: true }, Validators.required],
      endDate: [{ value: '', disabled: true }, Validators.required]
    });
  }

  ngOnInit() {
    this.form.get('startDate')?.setValue(new Date());
    this.form.get('endDate')?.setValue(new Date()),
    this.form.get('startDate')?.enable();
    this.form.get('endDate')?.enable();
  }


}
