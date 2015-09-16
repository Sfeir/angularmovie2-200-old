import {Component, View, NgFor, Inject} from 'angular2/angular2';
import {Http,Headers} from 'angular2/http';
import {MovieFormComponent} from '../movieForm/MovieFormComponent';

@Component({
    selector: 'movies'
})
@View({
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
        this.http.post('api/movies', JSON.stringify(movie),{headers: new Headers({'Content-Type': 'application/json'})}).map(res => res.json())
            .subscribe((newMovie)=> {
                this.movies.push(newMovie);
            });
    }
    deleteMovie(index,movie){
        window.fetch('/api/movies/'+movie.id, {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        }).then((response)=> {
            this.movies.splice(index, 1);
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }
}
