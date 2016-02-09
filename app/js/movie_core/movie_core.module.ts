import Movies from './Movies'
import Editable from './editable.directive'
import upgradeAdapter from './upgrade_adapter';

upgradeAdapter.addProvider(Movies);

export default angular.module('movie.core', [])
    .service('Movie',upgradeAdapter.downgradeNg2Provider(Movies))
    .directive('editable',Editable);