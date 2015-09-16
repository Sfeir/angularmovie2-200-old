import {Component, View, FORM_DIRECTIVES,EventEmitter} from 'angular2/angular2';

@Component({
    selector: 'movie-form',
    events: ['movieAdd']
})
@View({
    templateUrl: 'ts/components/movieForm/movie-form.html',
    directives:[FORM_DIRECTIVES]
})
export class MovieFormComponent {
    movie:Object;
    name:string;
    movieAdd: EventEmitter;
    constructor() {
        this.movieAdd = new EventEmitter();
        this.movie={};
    }
    addMovie(){
        this.movieAdd.next(this.movie);
        this.movie={};
    }
}
