import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.scss']
})
export class ManageusersComponent implements OnInit {
  searchForm! : FormGroup;
  @ViewChild('table')
  table!: MatTable<Element>;
  displayedColumns = [ 'name', 'action'];


  constructor() { }

  ngOnInit(): void {
  }

  onSearch(){}

}
