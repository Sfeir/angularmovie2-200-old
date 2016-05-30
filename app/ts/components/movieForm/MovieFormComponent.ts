import {Component, EventEmitter} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';

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
