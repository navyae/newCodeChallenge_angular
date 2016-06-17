///<reference path="../typings/browser.d.ts"/>
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from "./app.component";
import {HTTP_PROVIDERS} from '@angular/http';
import {GetService} from './services/getService.service';
bootstrap(AppComponent, [HTTP_PROVIDERS]);