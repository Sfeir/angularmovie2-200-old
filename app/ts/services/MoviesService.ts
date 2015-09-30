import { bind, Injector } from 'angular2/angular2';

export class MoviesService {

    fetchMovies() {
        return window.fetch('/api/movies')
            .then(function(response) {
                return response.json()
            }).catch(function(ex) {
                console.log('parsing failed', ex)
            })
    }
    getMovie(id:string) {
        return window.fetch('/api/movies/' + id)
            .then(function (response:Response) {
                return response.json()
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
    addMovie(movie){
        var _this=this;
        return window.fetch('/api/movies', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        }).then(function(response) {
            return response.json()
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }
    updateMovie(movie){
        return window.fetch('/api/movies', {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        }).then(function (response:Response) {
            return response.json()
        }).catch((ex)=> {
            console.log('parsing failed', ex)
        })
    }
    deleteMovie(index,movie){
        var _this=this;
        return window.fetch('/api/movies/'+movie.id, {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }
}
