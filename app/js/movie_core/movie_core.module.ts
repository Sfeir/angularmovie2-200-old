import starsFilter from './stars.filter'
import posterFilter from './poster.filter'
import Movie from './movie_service'
import Editable from './editable.directive'

export default angular.module('movie.core', [])
    .filter('stars',starsFilter)
    .filter('poster',posterFilter)
    .service('Movie',Movie)
    .directive('editable',Editable);