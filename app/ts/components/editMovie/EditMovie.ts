import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {Router,RouterLink,RouteParams} from '@angular/router-deprecated'
import {Http,Headers} from '@angular/http';


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
                rate: [""]
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
}
