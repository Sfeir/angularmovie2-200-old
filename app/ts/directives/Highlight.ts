import {Directive, ElementRef,EventEmitter,Renderer,Inject} from '@angular/core';

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
    renderer:Renderer;

    constructor(element:ElementRef, renderer:Renderer) {
        this.element=element;
        this.renderer=renderer;
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
        this.renderer.setElementStyle(this.element.nativeElement, 'color', color);
    }
}
