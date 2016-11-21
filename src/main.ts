import { bootstrap }    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app/app.component';
import {JSONP_PROVIDERS} from '@angular/http';

bootstrap(AppComponent);
bootstrap(AppComponent, [ JSONP_PROVIDERS]).catch(err => console.error(err));