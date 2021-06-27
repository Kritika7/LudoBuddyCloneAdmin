import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-top10players',
  templateUrl: './top10players.component.html',
  styleUrls: ['./top10players.component.scss']
})
export class Top10playersComponent implements OnInit {

  form!: FormGroup;
  @ViewChild('table')
  table!: MatTable<Element>;
  displayedColumns = ['id', 'name', 'amount', 'commission'];


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
