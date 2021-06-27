import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-txn',
  templateUrl: './txn.component.html',
  styleUrls: ['./txn.component.scss']
})
export class TxnComponent implements OnInit {
  counter=0;
  constructor() { }

  ngOnInit(): void {
  }

}
