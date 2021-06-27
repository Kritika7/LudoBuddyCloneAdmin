import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss']
})
export class UserviewComponent implements OnInit {
  name!: string;
  mobile!: string;
  balance!: string;

  inputColumns = ['Created At', 'Last Login', 'User Group', 'Last Login IP', 'User Agent'];
  constructor() { }

  ngOnInit(): void {
  }

}
