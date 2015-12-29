import {Component, View} from 'angular2/core';
@Component({
    selector: 'home'
})
@View({
    templateUrl: 'ts/components/home/home.html'
})
export class HomeComponent {
    name:string;
    constructor(){
        this.name='Cyril';
    }
}