import MovieList from './MovieList';
import upgradeAdapter from '../movie_core/upgrade_adapter';

export default angular.module('movie.list', ['movie.core'])
    .directive('maMovieList',
        <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(MovieList));