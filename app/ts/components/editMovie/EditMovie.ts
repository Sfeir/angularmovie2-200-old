import {Component, View, FORM_DIRECTIVES,CORE_DIRECTIVES, Inject, ControlGroup, FormBuilder, Validators} from 'angular2/angular2';
import {Router,RouterLink,RouteParams} from 'angular2/router';


@Component({
    selector: 'edit-movie',
    viewBindings: [FormBuilder]
})
@View({
    templateUrl: 'ts/components/editMovie/editMovie.html',
    directives: [CORE_DIRECTIVES,FORM_DIRECTIVES, RouterLink]
})
export class EditMovieComponent {
    id:string;
    router:Router;
    movie:any;
    movieForm: ControlGroup;

    constructor(@Inject(Router)router, @Inject(RouteParams)routeParams, @Inject(FormBuilder)builder) {

        this.router = router;
        this.id = routeParams.get('id');
        this.movie = {};
        if (this.id) {
            this.getMovie(this.id).then((response)=> {
                this.movie = response;
            })
        }
    }
    getMovie(id:String) {
        return window.fetch('/api/movies/' + id)
            .then(function (response:Response) {
                return response.json()
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
    isControlValid(cName:string,form:ControlGroup) {
        var isValid=true;
        if(form.controls && form.controls[cName]){
            isValid=form.controls[cName].valid;
        }
        return isValid;
    }
    editMovie() {

        window.fetch('/api/movies', {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.movie)
        }).then(()  => {
            this.router.navigate('/movies');
        }).catch((ex)=> {
            console.log('updating failed', ex)
        })
    }
}
