import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, Control} from 'angular2/common';
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
    movieForm: ControlGroup;

    constructor(router:Router,routeParams:RouteParams,http:Http, builder: FormBuilder) {
        this.router = router;
        this.http = http;
        this.id = routeParams.get('id');
        this.movie = {};
        this.movieForm = builder.group(
            {
                title: ["", Validators.required],
                releaseYear: ["", Validators.required],
                directors: [""],
                actors: [""],
                rate: ["",this.getRangeNumberValidator(1,5)]
            }
        );

        if (this.id) {
            this.getMovie(this.id);
        }
    }

    getMovie(id:String) {
        this.http.get('api/movies/'+ id)
            .map(res => res.json())
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
        this.movie.title=this.movieForm.value.title;
        this.movie.releaseYear=this.movieForm.value.releaseYear;
        this.movie.directors=this.movieForm.value.directors;
        this.movie.actors=this.movieForm.value.actors;
        this.movie.rate=this.movieForm.value.rate;

        this.http.put('api/movies', JSON.stringify(this.movie),{headers: new Headers({'Content-Type': 'application/json'})})
            .subscribe(()=> {
                this.router.navigate(['Movies']);
            });
    }
    getRangeNumberValidator(min, max) {
        return function (c:Control):any {
            if(c.value){
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
