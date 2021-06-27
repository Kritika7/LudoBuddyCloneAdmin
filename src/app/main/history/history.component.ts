import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  winCounter = 0;
  loseCounter = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
