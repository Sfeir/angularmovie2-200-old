import { Injectable} from 'angular2/core';
import {Http,Headers} from 'angular2/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export default class Movies {
    http:Http;
    constructor(http:Http) {
        this.http = http;
    }
    fetch() {
        return this.http.get('api/movies')
            .map(res => res.json());
    }
    fetchOne(id:string) {
        return this.http.get('api/movies/'+id)
            .map(res => res.json());
    }
    create(movie){
        return this.http.post('api/movies',JSON.stringify(movie),{headers: new Headers({'Content-Type': 'application/json'})})
            .map(res => res.json());
    }
    update(movie){
        return this.http.put('api/movies',JSON.stringify(movie),{headers: new Headers({'Content-Type': 'application/json'})});
    }
    remove(movieId){
        return this.http.delete('api/movies/'+movieId);
    }
}