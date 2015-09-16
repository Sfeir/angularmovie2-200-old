import {Component, View, NgFor} from 'angular2/angular2';
import {MovieFormComponent} from 'ts/components/movieForm/MovieFormComponent';
@Component({
    selector: 'movies'
})
@View({
    templateUrl: 'ts/components/movies/movies.html',
    directives: [NgFor,MovieFormComponent]
})
export class MoviesComponent {
    name:string;
    movies: any;
    constructor(){
        this.getMovies().then((response)=> {
            this.movies=response;
        })
    }
    getMovies(){
        return window.fetch('/api/movies')
            .then(function(response) {
                return response.json()
            }).then(function(json) {
                return json;
            }).catch(function(ex) {
                console.log('parsing failed', ex)
            })
    }
    addMovie(movie){
        window.fetch('/api/movies', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        }).then(function(response) {
            return response.json()
        }).then((newMovie)=> {
            this.movies.push(newMovie);
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }
}
