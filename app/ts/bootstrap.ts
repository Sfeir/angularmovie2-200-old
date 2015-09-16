/// <reference path="../lib/tsd.d.ts" />

import {bootstrap, bind} from 'angular2/angular2';
import { ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {App} from 'ts/app/App';


bootstrap(App,[ROUTER_BINDINGS,bind(LocationStrategy).toClass(HashLocationStrategy)]);