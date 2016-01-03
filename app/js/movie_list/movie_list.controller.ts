class MovieListController {
    tableView : boolean;
    tableViewIcon: string;
    movies:any[];

    constructor(public Movie){
        // display mode by default
        this.tableView = false;
        // icon by mode by default
        this.tableViewIcon = 'icon-th-list icon-white';
        Movie.fetch().success((resp)=>{
            this.movies = resp;
        });

    }

    toogleView() {
        this.tableView = !this.tableView;

        if(this.tableView === false){
            this.tableViewIcon = 'icon-th-list icon-white';
        } else {
            this.tableViewIcon = 'icon-th icon-white';
        }
    }



    deleteMovie(index){
        this.Movie.remove(this.movies[index].id)
            .success(()=>{
                this.movies.splice(index, 1);
                }
            );
    }

}

MovieListController.$inject = ['Movie'];

export default MovieListController;