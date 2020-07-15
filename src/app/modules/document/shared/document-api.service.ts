import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {IDocument, IDocumentApprove, IDocumentApproveRes} from '../../../interfaces/api';
import {mergeMap} from 'rxjs/operators';

@Injectable()
export class DocumentApiService {

  constructor() { }

  getDocument(id: string): Observable<IDocument> {
    return of({
        id,
        title: 'Lorem ipsum',
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores earum iste laudantium nesciunt repellat, rerum totam.</p><p>Ab amet beatae delectus deleniti dignissimos eum ex facilis incidunt ipsa iste iure iusto laborum nemo nostrum, odio perspiciatis sint ut, voluptates voluptatum!</p>'
    });
  }

  approveDocument(doc: IDocumentApprove): Observable<IDocumentApproveRes> {
    return of(doc).pipe(
      mergeMap(() => {
        return of({
          message: 'Документ успешно утвержден'
        });
      })
    );
  }
}
