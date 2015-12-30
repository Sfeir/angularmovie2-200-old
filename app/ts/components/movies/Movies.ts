import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {MovieFormComponent} from '../movieForm/MovieFormComponent';
import {RouterLink} from 'angular2/router'
import {MoviesService} from '../../services/MoviesService';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';

@Component({
    selector: 'movies',
    templateUrl: 'ts/components/movies/movies.html',
    directives: [NgFor, MovieFormComponent,RouterLink]
})
export class MoviesComponent {
    name:string;
    movies:any;
    moviesService: MoviesService;

    constructor(moviesService:MoviesService) {
        this.moviesService=moviesService;
        this.movies = [];
        this.getMovies();
    }

    getMovies(){
        this.moviesService.fetchMovies().subscribe((movies)=>{
            this.movies=movies;
        });
    }
    addMovie(movie){
        this.moviesService.addMovie(movie).subscribe((newMovie)=> {
            this.movies.push(newMovie);
        });
    }
    deleteMovie(index,movie){
        this.moviesService.deleteMovie(index,movie).subscribe(()=> {
            this.movies.splice(index, 1);
        });
    }
}
