import {Component} from '@angular/core';
@Component({
    selector: 'home',
    templateUrl: 'ts/components/home/home.html'
})
export class HomeComponent {
    name:string;
    constructor(){
        this.name='Cyril';
    }
}