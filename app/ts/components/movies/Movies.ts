import {Component, View, CORE_DIRECTIVES, Inject} from 'angular2/angular2';
import {Http,Headers} from 'angular2/http';
import {RouterLink} from 'angular2/router'
import {MovieFormComponent} from '../movieForm/MovieFormComponent';
import {MoviesService} from '../../services/MoviesService';
import {RatePipe} from '../../pipes/RatePipe';
import {Highlight} from '../../directives/Highlight';
import {Lazy} from '../../directives/Lazy';

@Component({
    selector: 'movies'
})
@View({
    templateUrl: 'ts/components/movies/movies.html',
    directives: [CORE_DIRECTIVES,MovieFormComponent,RouterLink,Highlight,Lazy],
    pipes:[RatePipe]
})
export class MoviesComponent {
    name:string;
    movies:any;
    http:Http;
    moviesService: MoviesService;
    lastViewDate:Date;
    displayTable:boolean;

    constructor(@Inject(Http)http,@Inject(MoviesService)moviesService) {
        this.http = http;
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
    onChange(message){
        alert('message:'+message)
    }
}
