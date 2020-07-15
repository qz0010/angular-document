import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageModule} from './pages/login-page/login-page.module';
import {AuthGuard} from './core/auth/auth.guard';


const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule)},
  {
    path: 'document',
    loadChildren: () => import('./pages/document-page/document-page.module').then(m => m.DocumentPageModule)
  },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginPageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
