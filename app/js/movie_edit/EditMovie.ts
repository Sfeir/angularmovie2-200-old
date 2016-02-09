import {Component, Inject} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Router, RouteParams} from 'angular2/router';
import Movies from '../movie_core/Movies';

interface MovieRouteParams {
    id: string
}

@Component({
    selector: 'ma-edit-movie',
    templateUrl: 'js/movie_edit/movie_edit.html',
    directives:[CORE_DIRECTIVES,FORM_DIRECTIVES]
})
export default class EditMovie {
    movie:Object;
    $location;

    constructor(private movieService:Movies, params:RouteParams, private router:Router) {
        this.movie={};
        var movieId = params.get('id');
        this.movieService.fetchOne(movieId).subscribe((movie)=> {
            this.movie = movie;
        });
    }


    updateMovie() {
        this.movieService.update(this.movie)
            .subscribe(()=> {
                this.router.navigate(['Movies']);
            });
    }

}