import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MovieFormComponent} from '../movieForm/MovieFormComponent';
import {MoviesService} from '../../services/MoviesService';
import {RatePipe} from '../../pipes/RatePipe';
import {Highlight} from '../../directives/Highlight';
import {Lazy} from '../../directives/Lazy';

@Component({
    selector: 'movies',
    templateUrl: 'ts/components/movies/movies.html',
    directives: [
      MovieFormComponent,
      ROUTER_DIRECTIVES,
      Highlight,
      Lazy
    ],
    providers: [MoviesService],
    pipes:[RatePipe]
})
export class MoviesListComponent {
    name:string;
    movies:any;
    moviesService: MoviesService;
    lastViewDate:Date;
    displayTable:boolean;

    constructor(moviesService:MoviesService) {
        this.moviesService=moviesService;
        this.movies = [];
        this.lastViewDate=new Date();
        this.displayTable=false;
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
    switchDisplay(){
        this.displayTable=!this.displayTable;
    }
}
