import {Component, View, CORE_DIRECTIVES,FORM_DIRECTIVES, Inject, ControlGroup} from 'angular2/angular2';
import {Http,Headers} from 'angular2/http';
import {Router,RouterLink,RouteParams} from 'angular2/router'


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
    http:Http;

    constructor(@Inject(Router)router, @Inject(RouteParams)routeParams,@Inject(Http)http) {
        this.router = router;
        this.http = http;
        this.id = routeParams.get('id');
        this.movie = {};
        if (this.id) {
            this.getMovie(this.id);
        }
    }
    getMovie(id:String) {
        this.http.get('api/movies/' + id)
            .map(res => res.json())
            .subscribe((movie)=> {
                this.movie = movie;
            });
    }
    editMovie() {
        this.http.put('api/movies', JSON.stringify(this.movie), {headers: new Headers({'Content-Type': 'application/json'})})
            .subscribe((newMovie)=> {
                var instruction = this.router.generate(['/Movies']);
                this.router.navigateByInstruction(instruction);
            });
    }
    isControlValid(cName:string,form:ControlGroup) {
        var isValid=true;
        if(form.controls && form.controls[cName]){
            isValid=form.controls[cName].valid;
        }
        return isValid;
    }
}
