import { Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';

@Injectable()
export class MoviesService {
    http:Http;
    constructor(http:Http) {
        this.http = http;
    }
    fetchMovies() {
        return this.http.get('api/movies')
            .map(res => res.json());
    }
    getMovie(id:string) {
        return this.http.get('api/movies/'+id)
            .map(res => res.json());
    }
    addMovie(movie){
        return this.http.post('api/movies',JSON.stringify(movie),{headers: new Headers({'Content-Type': 'application/json'})})
            .map(res => res.json());
    }
    updateMovie(movie){
        return this.http.put('api/movies',JSON.stringify(movie),{headers: new Headers({'Content-Type': 'application/json'})});
    }
    deleteMovie(index,movie){
        return this.http.delete('api/movies/'+movie.id);
    }
}