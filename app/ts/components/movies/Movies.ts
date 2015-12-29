import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {MovieFormComponent} from '../movieForm/MovieFormComponent';

@Component({
    selector: 'movies',
    templateUrl: 'ts/components/movies/movies.html',
    directives: [NgFor, MovieFormComponent]
})
export class MoviesComponent {
    name:string;
    movies:any;
    http:Http;

    constructor(@Inject(Http)http) {
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
        this.http.post('api/movies', JSON.stringify(movie)).map(res => res.json())
            .subscribe((newMovie)=> {
                this.movies.push(newMovie);
            });
    }
}
