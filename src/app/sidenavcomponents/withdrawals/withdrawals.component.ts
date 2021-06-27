import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SendmoneyComponent } from '../sendmoney/sendmoney.component';

@Component({
  selector: 'app-withdrawals',
  templateUrl: './withdrawals.component.html',
  styleUrls: ['./withdrawals.component.scss']
})
export class WithdrawalsComponent implements OnInit {
  total: number = 17500;
  count: number = 6;
  winnerPlayer:string = "KKR";
  date!: Date
  mobile:number = 987654321;
  amount:number=300;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    const dialogRef = this.dialog.open(SendmoneyComponent,{
      width:'640px',disableClose:false
    });

  }
}
