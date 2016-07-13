import {Component} from '@angular/core';
import {FormBuilder, Validators, ControlGroup, Control} from '@angular/common';
import {ActivatedRoute, Router, ROUTER_DIRECTIVES} from '@angular/router';
import {MoviesService} from '../../services/MoviesService';


@Component({
    selector: 'edit-movie',
    templateUrl: 'ts/components/editMovie/editMovie.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [MoviesService]
})
export class EditMovieComponent {
    id:number;
    movie:any;
    movieForm:ControlGroup;
    moviesService:MoviesService;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      builder:FormBuilder,
      moviesService:MoviesService
    ) {
        this.moviesService = moviesService;
        this.movie = {};
        this.movieForm = builder.group(
            {
                title: ["", Validators.required],
                releaseYear: ["", Validators.required],
                directors: [""],
                actors: [""],
                rate: ["", this.getRangeNumberValidator(1, 5)]
            }
        );

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
         this.id = +params['id'];
         this.getMovie(this.id);
       });
    }

    getMovie(id:number) {
        this.moviesService.getMovie(this.id)
            .subscribe((movie)=> {
                this.movie = movie;
                (<Control>this.movieForm.controls['title']).updateValue(this.movie.title);
                (<Control>this.movieForm.controls['releaseYear']).updateValue(this.movie.releaseYear);
                (<Control>this.movieForm.controls['directors']).updateValue(this.movie.directors);
                (<Control>this.movieForm.controls['actors']).updateValue(this.movie.actors);
                (<Control>this.movieForm.controls['rate']).updateValue(this.movie.rate);
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
                this.router.navigate(['/movies']);
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
