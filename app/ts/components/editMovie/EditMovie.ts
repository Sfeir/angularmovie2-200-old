import {Component, View, FORM_DIRECTIVES, Inject} from 'angular2/angular2';
import {Router,RouterLink,RouteParams,Location} from 'angular2/router'


@Component({
    selector: 'edit-movie'
})
@View({
    templateUrl: 'ts/components/editMovie/editMovie.html',
    directives: [FORM_DIRECTIVES, RouterLink]
})
export class EditMovieComponent {
    id:string;
    router:Router;
    location: Location;
    movie:any;

    constructor(@Inject(Router)router, @Inject(RouteParams)routeParams,@Inject(Location)location) {
        this.router = router;
        this.location = location;
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
            }).then(function (json:any) {
                return json;
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }

    cancel() {
        this.location.back();
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
