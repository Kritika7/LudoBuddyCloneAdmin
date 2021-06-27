import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  MatTable } from '@angular/material/table';

@Component({
  selector: 'app-matchcancellation',
  templateUrl: './matchcancellation.component.html',
  styleUrls: ['./matchcancellation.component.scss']
})
export class MatchcancellationComponent implements OnInit {
  form!: FormGroup;
  @ViewChild('table')
  table!: MatTable<Element>;
  displayedColumns = ['id', 'userName', 'cancelled', 'banned'];


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
