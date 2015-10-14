import {Directive, ElementRef,EventEmitter,Inject} from 'angular2/angular2';

@Directive({
    selector: '[highlight]',
    properties: [
        'message: message'
    ],
    host: {
        '(mouseenter)': 'onmouseEnter()',
        '(mouseleave)': 'onmouseLeave()',
        '(click)':'onClick($event)'

    }
})
export class Highlight {
    message:string;
    element:ElementRef;

    constructor(@Inject(ElementRef)element) {
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
