import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-document-page',
  templateUrl: './document-page.component.html',
  styleUrls: ['./document-page.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
