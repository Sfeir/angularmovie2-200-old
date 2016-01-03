


class Movie{

    API_URI = '/api/movies';

    constructor(public $http){

    }

    fetch() {
        return this.$http.get(this.API_URI);
    }

    create(movie) {
        return this.$http.post(this.API_URI, movie);
    }

    remove(id) {
        return this.$http.delete(this.API_URI + '/' + id);
    }

    fetchOne(id) {
        return this.$http.get(this.API_URI + '/' + id);
    }

    update(movie) {
        return this.$http.put(this.API_URI, movie);
    }

}


Movie.$inject = ['$http'];

export default Movie;