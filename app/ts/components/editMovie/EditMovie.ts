import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Router,RouterLink,RouteParams} from 'angular2/router'
import {Http,Headers} from 'angular2/http';

@Component({
    selector: 'edit-movie',
    templateUrl: 'ts/components/editMovie/editMovie.html',
    directives: [CORE_DIRECTIVES,FORM_DIRECTIVES, RouterLink]
})
export class EditMovieComponent {
    id:string;
    router:Router;
    http:Http;
    movie:any;
    http:Http;
    movieForm: ControlGroup;

    constructor(router:Router,routeParams:RouteParams,http:Http) {
        this.router = router;
        this.http = http;
        this.id = routeParams.get('id');
        this.movie = {};
        if (this.id) {
            this.getMovie(this.id);
        }
    }
    getMovie(id:String) {
        this.http.get('api/movies/'+ id)
            .map(res => res.json())
            .subscribe((movie)=> {
                this.movie = movie;
            });
    }
    editMovie() {
        this.http.put('api/movies', JSON.stringify(this.movie),{headers: new Headers({'Content-Type': 'application/json'})})
            .subscribe(()=> {
                this.router.navigate(['Movies']);
            });
    }
}
