import {Directive, ElementRef,EventEmitter,Inject} from 'angular2/angular2';

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

    constructor(@Inject(ElementRef)element) {
        this.element = element;
    }

    load() {
        if (!this.hasLoad) {
            window.fetch(this.url)
                .then((response:Response) => {
                    return response.json();
                }).then((data)=>{
                    this.setInner(data);
                });
        }
    }

    setInner(content) {
        this.element.nativeElement.innerHTML = content;
        this.hasLoad = true;
    }
}
