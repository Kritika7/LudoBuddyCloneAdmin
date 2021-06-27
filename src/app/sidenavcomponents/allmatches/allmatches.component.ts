import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allmatches',
  templateUrl: './allmatches.component.html',
  styleUrls: ['./allmatches.component.scss']
})
export class AllmatchesComponent implements OnInit {
  playerOne: string = "Amit";
  playerTwo: string = "Kartik";
  amount: number = 50;
  date!: Date;
  gameStatus: string[] = ["cancelled", "declared", "pending"];

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(){

  }

}
