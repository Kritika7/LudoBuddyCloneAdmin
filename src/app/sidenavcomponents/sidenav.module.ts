import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LudoLayoutModule } from '../layout/layout.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddmoneyrequestComponent } from './addmoneyrequest/addmoneyrequest.component';
//import { AdminareaComponent } from './adminarea/adminarea.component';
import { AllmatchesComponent } from './allmatches/allmatches.component';
import { AuditComponent } from './audit/audit.component';
import { LivematchesComponent } from './livematches/livematches.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { MatchcancellationComponent } from './matchcancellation/matchcancellation.component';
import { MatchreleaseComponent } from './matchrelease/matchrelease.component';
import { PaytmmgtComponent } from './paytmmgt/paytmmgt.component';
import { PlaygroundComponent } from './playground/playground.component';
import { Top10playersComponent } from './top10players/top10players.component';
import { TransactionsComponent } from './transactions/transactions.component';
//import { UserAreaComponent } from './user-area/user-area.component';
import { WithdrawalsComponent } from './withdrawals/withdrawals.component';
import { SidenavcomponentsComponent } from './sidenavcomponents.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDatetimepickerModule, MatNativeDatetimeModule } from '@mat-datetimepicker/core';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMatDatetimePickerModule } from '@angular-material-components/datetime-picker';
import { MatTableModule } from "@angular/material/table";
import { UserviewComponent } from './userview/userview.component';
import { MatSelectModule } from '@angular/material/select';
import { MatchviewComponent } from './matchview/matchview.component';
import { SendmoneyComponent } from './sendmoney/sendmoney.component';
import {MatGridListModule} from '@angular/material/grid-list';

const routes: Routes = [
  {path:'',component:SidenavcomponentsComponent,children:[
    {path: 'addmoney',component:AddmoneyrequestComponent},
    //{path: 'adminarea',component:AdminareaComponent},
    {path: 'audit',component:AuditComponent},
    {path: 'livematches',component:LivematchesComponent},
    {path: 'manageusers',component:ManageusersComponent},
    {path: 'matchcancellation',component:MatchcancellationComponent},
    {path: 'matchrelease',component:MatchreleaseComponent},
    {path: 'paytmmgt',component:PaytmmgtComponent},
    {path: 'playground',component:PlaygroundComponent},
    {path: 'topplayers',component:Top10playersComponent},
    {path: 'transactions',component:TransactionsComponent},
   // {path: 'userarea',component:UserAreaComponent},
    {path: 'withdrawals',component:WithdrawalsComponent},
    {path:'userview', component:UserviewComponent},
    {path:'allmatches',component:AllmatchesComponent},
    {path:'matchview',component:MatchviewComponent},
    {path: '**', redirectTo:'livematches'},
  ]},
  {path:'**', redirectTo: ''}
]


@NgModule({
  declarations: [
    AddmoneyrequestComponent,
    AllmatchesComponent,
    AuditComponent,
    LivematchesComponent,
    ManageusersComponent,
    MatchcancellationComponent,
    MatchreleaseComponent,
    PaytmmgtComponent,
    PlaygroundComponent,
    Top10playersComponent,
    TransactionsComponent,
    WithdrawalsComponent,
    UserviewComponent,
    MatchviewComponent,
    SidenavcomponentsComponent,
    SendmoneyComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    FontAwesomeModule,
    FlexLayoutModule,
    LudoLayoutModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatDatepickerModule,
    MatDatetimepickerModule,
    MatNativeDatetimeModule,
    NgxMatDatetimePickerModule,
    MatTableModule,
    MatSelectModule,
    MatGridListModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SideNavModule {
  constructor(){
  }
}
