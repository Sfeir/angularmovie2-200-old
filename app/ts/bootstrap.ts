import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import {App} from './app/App';
import {MoviesService} from './services/MoviesService';

bootstrap(App,[
    MoviesService,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy,{useClass:HashLocationStrategy})
]);
