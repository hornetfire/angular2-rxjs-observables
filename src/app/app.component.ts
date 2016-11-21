import {Component} from '@angular/core';
import {WikipediaPromiseComponent} from './WikiPromise/wiki-promise.component';
import {WikipediaRxComponent} from './WikiRx/wiki-rx.component';

@Component({
  selector: 'my-app',
  directives: [WikipediaPromiseComponent,WikipediaRxComponent],
  template: `
    <div class="container">       
      <wikipedia-promises >Loading....</wikipedia-promises>
      <wikipedia-rx>Loading....</wikipedia-rx>            
    </div>
  `
})
export class AppComponent {

}