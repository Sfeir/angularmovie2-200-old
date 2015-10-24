import {Directive, ElementRef,EventEmitter,Inject} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Directive({
    selector: '[lazy]',
    properties: [
        'url: lazy'
    ],
    host: {
        '(click)': 'load()'
    }
})
export class Lazy {
    hasLoad:boolean;
    url:string;
    element:ElementRef;
    http:Http;

    constructor(@Inject(ElementRef)element,@Inject(Http)http) {
        this.element = element;
        this.http = http;
    }

    load() {
        if (!this.hasLoad) {
            this.http.get(this.url).map(res => res.json()).subscribe((data)=> {
                this.setInner(data);
            });
        }
    }

    setInner(content) {
        this.element.nativeElement.innerHTML = content;
        this.hasLoad = true;
    }
}
