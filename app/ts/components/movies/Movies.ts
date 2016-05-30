import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {MovieFormComponent} from '../movieForm/MovieFormComponent';
import {Http,Headers} from '@angular/http';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';

@Component({
    selector: 'movies',
    templateUrl: 'ts/components/movies/movies.html',
    directives: [NgFor,MovieFormComponent,ROUTER_DIRECTIVES]
})
export class MoviesComponent {
    name:string;
    movies:any;
    http:Http;

    constructor(http:Http) {
        this.http = http;
        this.movies = [];
        this.getMovies();
    }

    getMovies() {
        this.http.get('api/movies').map(res => res.json())
            .subscribe((movies)=> {
                this.movies = movies;
            });
    }

    addMovie(movie) {
        this.http.post('api/movies', JSON.stringify(movie),{headers: new Headers({'Content-Type': 'application/json'})})
            .map(res => res.json())
            .subscribe((newMovie)=> {
                this.movies.push(newMovie);
            });
    }

    deleteMovie(index, movie) {
        this.http.delete('api/movies/'+movie.id)
            .subscribe((resp)=> {
                this.movies.splice(index, 1);
            });
    }
}
