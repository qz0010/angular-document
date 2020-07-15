import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {DocumentApiService} from '../shared/document-api.service';
import {BehaviorSubject} from 'rxjs';
import {IDocument, IDocumentApprove, IDocumentApproveRes} from '../../../interfaces/api';
import {AuthService} from '../../../core/auth/auth.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentComponent implements OnInit {
  private docSource: BehaviorSubject<IDocument> = new BehaviorSubject(null);
  public doc$ = this.docSource.asObservable();
  private approvedSource: BehaviorSubject<IDocumentApproveRes> = new BehaviorSubject(null);
  public approved$ = this.approvedSource.asObservable();
  public md: IDocumentApprove | any = {
    resolution: undefined
  };

  constructor(
    private doc: DocumentApiService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.doc.getDocument('111').subscribe(doc => {
      this.docSource.next(doc);
    });
  }

  approve(state: 1 | 0) {
    this.doc.approveDocument({state, approver: this.auth.user.login, ...this.md}).subscribe(
      (data) => {
        this.approvedSource.next(data);
      }
    );
  }
}
