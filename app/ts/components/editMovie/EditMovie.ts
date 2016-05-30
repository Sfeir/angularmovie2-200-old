import {Component} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, Control} from '@angular/common';
import {Router,RouterLink,RouteParams} from '@angular/router-deprecated'
import {Http,Headers} from '@angular/http';

@Component({
    selector: 'edit-movie',
    templateUrl: 'ts/components/editMovie/editMovie.html',
    directives: [FORM_DIRECTIVES, RouterLink]
})
export class EditMovieComponent {
    id:string;
    router:Router;
    movie:any;
    movieForm:ControlGroup;
    moviesService:MoviesService;


    constructor(router:Router, routeParams:RouteParams, builder:FormBuilder, moviesService:MoviesService) {
        this.router = router;
        this.moviesService=moviesService;
        this.id = routeParams.get('id');
        this.movie = {};
        this.movieForm = builder.group(
            {
                title: ["", Validators.required],
                releaseYear: ["", Validators.required],
                directors: [""],
                actors: [""],
                rate: ["", this.getRangeNumberValidator(1,5)]
            }
        );

        if (this.id) {
            this.getMovie(this.id);
        }
    }

    getMovie(id:String) {
        this.moviesService.getMovie(this.id)
            .subscribe((movie)=> {
                this.movie = movie;
                this.movieForm.controls['title'].updateValue(this.movie.title);
                this.movieForm.controls['releaseYear'].updateValue(this.movie.releaseYear);
                this.movieForm.controls['directors'].updateValue(this.movie.directors);
                this.movieForm.controls['actors'].updateValue(this.movie.actors);
                this.movieForm.controls['rate'].updateValue(this.movie.rate);
            });
    }

    editMovie() {
        this.movie.title = this.movieForm.value.title;
        this.movie.releaseYear = this.movieForm.value.releaseYear;
        this.movie.directors = this.movieForm.value.directors;
        this.movie.actors = this.movieForm.value.actors;
        this.movie.rate = this.movieForm.value.rate;

        this.moviesService.updateMovie(this.movie)
            .subscribe(()=> {
                this.router.navigate(['Movies']);
            });
    }

    getRangeNumberValidator(min, max) {
        return function (c:Control):any {
            if (c.value || c.value==0) {
                var val = parseInt(c.value);
                //it's a number ?
                if (isNaN(val)) {
                    return {
                        number: true
                    }
                }
                //it's higher than min
                if (val < min) {
                    return {
                        min: true
                    }
                }
                //it's lower than max
                if (val > max) {
                    return {
                        max: true
                    }
                }
            }
            // Null means valid
            return null
        };
    }
}
