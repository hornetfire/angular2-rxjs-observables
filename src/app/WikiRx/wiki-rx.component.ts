import {Component} from '@angular/core';
import {Control} from '@angular/common';
import {JSONP_PROVIDERS} from '@angular/http';
import {WikipediaRxService} from './wiki-rx.service'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'wikipedia-rx',
  providers: [WikipediaRxService],
  template: `
    <div class="well">
      <h3>Wikipedia Search - Using Rx</h3>
      <input type="text" [ngFormControl]="term"/>
      <ul>
        <li *ngFor="#item of items | async">{{item}}</li>
      </ul>
    </div>
  `
})
export class WikipediaRxComponent {
  items: Observable<Array<string>>;
  term = new Control();
  constructor(private wikipediaService: WikipediaRxService) {
    this.items = this.term.valueChanges
                 .debounceTime(400)
                 .distinctUntilChanged()
                 .switchMap(term => this.wikipediaService.search(term));
  }
}