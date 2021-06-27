import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  winnerPlayer: string="Aish";
  amount: number = 9;
  number: number = 987651233;
  date!: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
