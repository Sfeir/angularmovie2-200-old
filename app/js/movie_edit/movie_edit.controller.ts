interface MovieRouteParams {
    id: string
}

class EditMovieController {
    movie:Object;

    constructor(public Movie, $routeParams:MovieRouteParams, public $location){
        var movieId = $routeParams.id;
        this.Movie.fetchOne(movieId).success((movie)=>{
            this.movie = movie;
        });
    }


    updateMovie(movie){
        this.Movie.update(movie)
            .success(()=>{
                this.$location.path('/movies');
            })
            .error((resp)=>{
                console.log(resp);
            });
    }
}

EditMovieController.$inject = ['Movie', '$routeParams', '$location'];

export default EditMovieController;