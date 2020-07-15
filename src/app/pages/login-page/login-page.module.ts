import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginPageComponent} from './login-page.component';
import {LoginModule} from '../../modules/login/login.module';
import {RouterModule} from '@angular/router';
import {MainLayoutComponent} from '../../modules/layouts/main-layout/main-layout/main-layout.component';
import {MainLayoutModule} from '../../modules/layouts/main-layout/main-layout.module';



@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    MainLayoutModule,
    LoginModule,
    RouterModule.forChild([
      {
        path: '', component: MainLayoutComponent, children: [
          {path: '', component: LoginPageComponent}
        ]
      }
    ])
  ]
})
export class LoginPageModule { }
