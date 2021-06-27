import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matchview',
  templateUrl: './matchview.component.html',
  styleUrls: ['./matchview.component.scss']
})
export class MatchviewComponent implements OnInit {
  id:string="UMADARK";
  playerOne:string="Vijay";
  playerTwo:string="Suraj";
  amount: number = 1000;
  gameStatus: string[] = ["Win","Lose","Cancel","Draw"];
  screenshotTime!:Date;
  reasonForCancellation!:string[];
  selectedResult: string = "Click to select";

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  updateResult(){}

  userView(){
    this.router.navigateByUrl('/sidenav/userview');
  }
}
