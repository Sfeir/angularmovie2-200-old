import {Directive, ElementRef} from '@angular/core';
import {Http} from '@angular/http';

@Directive({
    selector: '[lazy]',
    inputs: ['url:lazy'],
    host: {
        '(click)': 'load()'
    }
})
export class Lazy {
    hasLoad:boolean;
    url:string;
    element:ElementRef;
    http:Http;

    constructor(element:ElementRef,http:Http) {
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
