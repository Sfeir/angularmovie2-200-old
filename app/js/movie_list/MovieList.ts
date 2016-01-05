import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Movies} from '../movie_core/Movies';
import MovieFilterPipe from './MovieFilterPipe';
import OrderByPipe from './OrderByPipe';
import PosterPipe from '../movie_core/PosterPipe';

@Component({
    selector: 'ma-movie-list',
    templateUrl: 'js/movie_list/movie_list.html',
    directives:[CORE_DIRECTIVES],
    pipes:[MovieFilterPipe,OrderByPipe,PosterPipe]
})
export default class MovieList {
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