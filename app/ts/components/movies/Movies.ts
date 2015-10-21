import {Component, View, CORE_DIRECTIVES, Inject} from 'angular2/angular2';
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
    movies: any;
    moviesService: MoviesService;
    lastViewDate:Date;
    displayTable:boolean;

    constructor(@Inject(MoviesService)moviesService){
        this.movies=[];
        this.moviesService=moviesService;
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
