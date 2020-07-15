import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './document/document.component';
import {DocumentApiService} from './shared/document-api.service';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [DocumentComponent],
  exports: [DocumentComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DocumentApiService
  ]
})
export class DocumentModule { }
