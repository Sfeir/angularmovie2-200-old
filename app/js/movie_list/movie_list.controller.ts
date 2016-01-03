import {Movies} from '../movie_core/Movies';

class MovieListController {
    tableView : boolean;
    tableViewIcon: string;
    movies:any[];

    constructor(private moviesService:Movies){
        // display mode by default
        this.tableView = false;
        // icon by mode by default
        this.tableViewIcon = 'icon-th-list icon-white';
        moviesService.fetch().subscribe((resp)=>{
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
        this.moviesService.remove(this.movies[index].id)
            .subscribe(()=>{
                this.movies.splice(index, 1);
                }
            );
    }

}

MovieListController.$inject = ['Movie'];

export default MovieListController;