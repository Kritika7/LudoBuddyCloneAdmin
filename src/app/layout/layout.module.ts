import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesLayoutComponent } from './pages-layout/pages-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainLayoutAdminComponent } from './main-layout-admin/main-layout-admin.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AdminnavComponent } from './adminnav/adminnav.component';
// import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';




@NgModule({
  declarations: [
    PagesLayoutComponent,
    MainLayoutComponent,
    NavComponent,
    MainLayoutAdminComponent,
    AdminnavComponent,
    // DateTimePickerComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports:[PagesLayoutComponent,MainLayoutAdminComponent, MainLayoutComponent, NavComponent]
})
export class LudoLayoutModule { }
