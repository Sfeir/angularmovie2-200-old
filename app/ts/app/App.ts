import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'movies-app',
    templateUrl:'ts/app/app.html',
    directives: [ROUTER_DIRECTIVES]
})
export class App {}
