import EditMovie from './EditMovie'
import upgradeAdapter from '../movie_core/upgrade_adapter';

export default angular.module('movie.edit', ['movie.core'])
    .directive('maEditMovie',
        <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(EditMovie));