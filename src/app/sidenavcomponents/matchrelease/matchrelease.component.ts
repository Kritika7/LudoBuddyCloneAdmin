import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matchrelease',
  templateUrl: './matchrelease.component.html',
  styleUrls: ['./matchrelease.component.scss']
})
export class MatchreleaseComponent implements OnInit {
  player1: string = "Vijay";
  player2: string = "Suraj";
  time!: Date;
  amount: string = "1000";

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  gameStart(){
    this.router.navigateByUrl('/sidenav/matchview');
  }
}
