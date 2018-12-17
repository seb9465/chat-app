import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuUnComponent } from '../menu-un/menu-un.component';
import { AuthGuard } from '../authentication/_guards/auth.gards';
import { LoginComponent } from '../authentication/login/login.component';
import { HomeComponent } from '../authentication/home/home.component';
import { MenuDeuxComponent } from '../menu-deux/menu-deux.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'menu1', component: MenuUnComponent, canActivate: [AuthGuard] },
    { path: 'menu2', component: MenuDeuxComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
