import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager/manager.component';
import { MatToolbarModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component';
import { UserManagementComponent } from './user-management/user-management.component';

@NgModule({
  declarations: [
    ManagerComponent,
    ManagerHomeComponent,
    ReceiptLookupComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class ManagerModule { }
