import {Component, View, FORM_DIRECTIVES,CORE_DIRECTIVES, Inject, ControlGroup, Control, FormBuilder, Validators} from 'angular2/angular2';
import {Router,RouterLink,RouteParams} from 'angular2/router';
import {MoviesService} from '../../services/MoviesService';


@Component({
    selector: 'edit-movie'
})
@View({
    templateUrl: 'ts/components/editMovie/editMovie.html',
    directives: [CORE_DIRECTIVES,FORM_DIRECTIVES, RouterLink]
})
export class EditMovieComponent {
    id:string;
    router:Router;
    movie:any;
    moviesService:MoviesService;
    movieForm: ControlGroup;

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

    constructor(@Inject(Router)router, @Inject(RouteParams)routeParams, @Inject(FormBuilder)builder,@Inject(MoviesService)moviesService) {

        this.router = router;
        this.id = routeParams.get('id');
        this.movie = {};
        this.moviesService=moviesService;
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
            this.getMovie(this.id).subscribe((response)=> {
                this.movie = response;
                this.movieForm.controls['title'].updateValue(this.movie.title);
                this.movieForm.controls['releaseYear'].updateValue(this.movie.releaseYear);
                this.movieForm.controls['directors'].updateValue(this.movie.directors);
                this.movieForm.controls['actors'].updateValue(this.movie.actors);
                this.movieForm.controls['rate'].updateValue(this.movie.rate);
            });
        }
    }

    isControlValid(cName:string) {
        var isValid=true;
        if(this.movieForm.controls && this.movieForm.controls[cName]){
            isValid=this.movieForm.controls[cName].valid;
        }
        return isValid;
    }


    getMovie(id:String) {
        return this.moviesService.getMovie(this.id);
    }

    editMovie() {
        this.movie.title=this.movieForm.value.title;
        this.movie.releaseYear=this.movieForm.value.releaseYear;
        this.movie.directors=this.movieForm.value.directors;
        this.movie.actors=this.movieForm.value.actors;
        this.movie.rate=this.movieForm.value.rate;

        this.moviesService.updateMovie(this.movie).subscribe(()  => {
            var instruction = this.router.generate(['/Movies']);
            this.router.navigateByInstruction(instruction);
        });
    }
}
