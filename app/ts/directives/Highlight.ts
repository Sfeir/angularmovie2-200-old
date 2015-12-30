import {Directive, ElementRef,EventEmitter,Inject} from 'angular2/core';

@Directive({
    selector: '[highlight]',
    inputs: ['message'],
    host: {
        '(mouseenter)': 'onmouseEnter()',
        '(mouseleave)': 'onmouseLeave()',
        '(click)':'onClick($event)'

    }
})
export class Highlight {
    message:string;
    element:ElementRef;

    constructor(element:ElementRef) {
        this.element=element;
    }

    onClick($event) {
        alert(this.message);
    }

    onmouseEnter() {
        this.color('#f00');
    }

    onmouseLeave() {
        this.color();
    }

    color(color:string = "") {
        this.element.nativeElement.style.color = color;
    }
}
