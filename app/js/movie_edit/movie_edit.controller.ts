import Movies from '../movie_core/Movies';

interface MovieRouteParams {
    id: string
}

class EditMovieController {
    movie:Object;

    constructor(private movieService:Movies, $routeParams:MovieRouteParams, public $location){
        var movieId = $routeParams.id;
        this.movieService.fetchOne(movieId).subscribe((movie)=>{
            this.movie = movie;
        });
    }


    updateMovie(movie){
        this.movieService.update(movie)
            .subscribe(()=>{
                this.$location.path('/movies');
            });
    }
}

EditMovieController.$inject = ['Movie', '$routeParams', '$location'];

export default EditMovieController;