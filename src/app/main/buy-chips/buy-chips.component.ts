import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-chips',
  templateUrl: './buy-chips.component.html',
  styleUrls: ['./buy-chips.component.scss']
})
export class BuyChipsComponent implements OnInit {
  afterPaid = false;
  videoURL = "https://www.youtube.com/embed/LFoz8ZJWmPs";
  isShown: boolean = false;
  paymentForm: any;
  constructor() { }

  ngOnInit(): void {
  }

  helpVideo(){
    this.isShown = ! this.isShown;
  }

  copy(){

  }

  buy(){}
}
