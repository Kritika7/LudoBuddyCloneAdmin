import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { BuyChipsComponent } from './buy-chips/buy-chips.component';
import { SellChipsComponent } from './sell-chips/sell-chips.component';
import { HistoryComponent } from './history/history.component';
import { RouterModule, Routes } from '@angular/router';
import { LudoLayoutModule } from '../layout/layout.module';
import { MainComponent } from './main.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { SafePipe } from '../main/buy-chips/safe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HowToPlayComponent } from './home/how-to-play/how-to-play.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
//import { WaitingRoomComponent } from './waiting-room/waiting-room.component';
import {ClipboardModule} from '@angular/cdk/clipboard';


const routes: Routes = [
  {path:'',component:MainComponent,children:[
    {path: 'home',component:HomeComponent},
  //  {path: 'waiting-room/:matchId',component:WaitingRoomComponent},
    {path: 'buy',component:BuyChipsComponent},
    {path: 'sell',component:SellChipsComponent},
    {path: 'history',component:HistoryComponent},
    {path: 'transactions',loadChildren: ()=>import('./txn/txn.module').then(m=>m.TxnModule)},
    {path: 'settings',component:SettingsComponent},
  //  {path: 'how-to-play',component:HowToPlayComponent},
    {path: 'help',loadChildren: ()=>import('./help/help.module').then(m=>m.HelpModule)},
    {path: 'tnc',loadChildren:()=>import('./tnc/tnc.module').then(m=>(m.TncModule))},
    {path: '**', redirectTo:'home'},
  ]},
  {path:'**', redirectTo: ''}
]


@NgModule({
  declarations: [
    HomeComponent,
    SettingsComponent,
    BuyChipsComponent,
    SellChipsComponent,
    HistoryComponent,
    SafePipe,
    MainComponent
  ],
  imports: [
    CommonModule,
    LudoLayoutModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule
  ]
})
export class MainModule { }
