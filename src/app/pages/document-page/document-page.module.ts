import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DocumentModule} from '../../modules/document/document.module';
import {RouterModule} from '@angular/router';
import {DocumentPageComponent} from './document-page.component';
import {MainLayoutModule} from '../../modules/layouts/main-layout/main-layout.module';
import {MainLayoutComponent} from '../../modules/layouts/main-layout/main-layout/main-layout.component';
import {AuthGuard} from '../../core/auth/auth.guard';



@NgModule({
  declarations: [DocumentPageComponent],
  imports: [
    CommonModule,
    MainLayoutModule,
    DocumentModule,
    RouterModule.forChild([
      {
        path: '', component: MainLayoutComponent, children: [
          {path: '', component: DocumentPageComponent}
        ],
        canActivate: [AuthGuard]
      }
    ])
  ]
})
export class DocumentPageModule { }
