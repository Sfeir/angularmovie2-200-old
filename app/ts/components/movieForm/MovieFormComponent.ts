import {Component, EventEmitter} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'movie-form',
    outputs: ['movieAdd'],
    templateUrl: 'ts/components/movieForm/movie-form.html',
    directives:[FORM_DIRECTIVES]
})
export class MovieFormComponent {
    movie:Object;
    name:string;
    movieAdd: EventEmitter<any>;
    constructor() {
        this.movieAdd = new EventEmitter();
        this.movie={};
    }
    addMovie(){
        this.movieAdd.emit(this.movie);
        this.movie={};
    }
}