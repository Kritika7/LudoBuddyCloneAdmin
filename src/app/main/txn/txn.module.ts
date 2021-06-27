import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TxnComponent } from './txn.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    TxnComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class TxnModule { }
