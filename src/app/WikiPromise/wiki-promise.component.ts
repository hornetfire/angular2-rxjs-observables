import {Component} from '@angular/core';
import {WikipediaPromiseService} from './wiki-promise.service'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'wikipedia-promises',
  providers: [WikipediaPromiseService],
  template: `
    <div  class="well">
      <h3>Wikipedia Search - Using Promises</h3>
      <input #term type="text" (keyup)="search(term.value)">
      <ul>
        <li *ngFor="#item of items">{{item}}</li>
      </ul>
    </div>
  `
})
export class WikipediaPromiseComponent {
  items: Array<string>;
  constructor(private wikipediaService: WikipediaPromiseService) {
  }
  
  search (term) {
    this.wikipediaService.search(term).then(items => this.items = items);
  }
}
