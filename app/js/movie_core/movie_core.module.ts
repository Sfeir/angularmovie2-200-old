import starsFilter from './stars.filter'
import posterFilter from './poster.filter'
import {Movies} from './Movies'
import Editable from './editable.directive'
import upgradeAdapter from './upgrade_adapter';

upgradeAdapter.addProvider(Movies);

export default angular.module('movie.core', [])
    .filter('stars',starsFilter)
    .filter('poster',posterFilter)
    .service('Movie',upgradeAdapter.downgradeNg2Provider(Movies))
    .directive('editable',Editable);