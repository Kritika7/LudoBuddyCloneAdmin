import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sendmoney',
  templateUrl: './sendmoney.component.html',
  styleUrls: ['./sendmoney.component.scss']
})
export class SendmoneyComponent implements OnInit {
  public sendMoney!: FormGroup;
  pMobile!: number;
  selectedNumber:string="Select";
  currentBalance!:number;
  withdrawalAmount!:number;
  constructor() { }

  ngOnInit(): void {
  }

}
