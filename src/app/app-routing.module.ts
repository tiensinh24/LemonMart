import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

// Lazy-load child routes (good)
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/:redirectUrl', component: LoginComponent },
  { path: 'manager', loadChildren: './manager/manager.module#ManagerModule' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'pos', loadChildren: './pos/pos.module#PosModule'},
  { path: 'inventory', loadChildren: './inventory/inventory.module#InventoryModule'},
  // manager parent
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
