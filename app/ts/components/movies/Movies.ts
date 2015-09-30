import {Component, View, NgFor, Inject} from 'angular2/angular2';
import {RouterLink} from 'angular2/router'
import {MovieFormComponent} from 'ts/components/movieForm/MovieFormComponent';
import {MoviesService} from 'ts/services/MoviesService';
import {RatePipe} from 'ts/pipes/RatePipe';

@Component({
    selector: 'movies'
})
@View({
    templateUrl: 'ts/components/movies/movies.html',
    directives: [NgFor,MovieFormComponent,RouterLink],
    pipes:[RatePipe]
})
export class MoviesComponent {
    name:string;
    movies: any;
    moviesService: MoviesService;
    lastViewDate:Date;

    constructor(@Inject(MoviesService)moviesService){
        this.movies=[];
        this.moviesService=moviesService;
        this.lastViewDate=new Date();
        this.getMovies();
    }
    getMovies(){
        this.moviesService.fetchMovies().then((response)=> {
            this.movies=response;
        });
    }
    addMovie(movie){
        this.moviesService.addMovie(movie).then((newMovie)=> {
            this.movies.push(newMovie);
        });
    }
    deleteMovie(index,movie){
        this.moviesService.deleteMovie(index,movie).then(()=> {
            this.movies.splice(index, 1);
        });
    }
}
