angular.module('movie.list').controller("moviesController" ,function ($scope, Movie) {

    // display mode by default
    $scope.tableView = false;
    // icon by mode by default
    $scope.tableViewIcon = 'icon-th-list icon-white';

    // function called when changing view mode
    $scope.toogleView = function() {
        $scope.tableView = !$scope.tableView;

        if($scope.tableView === false){
            $scope.tableViewIcon = 'icon-th-list icon-white';
        } else {
            $scope.tableViewIcon = 'icon-th icon-white';
        }
    };

    Movie.fetch().success(function(resp){
        $scope.movies = resp;
    });


    $scope.deleteMovie = function(index){
        Movie.remove($scope.movies[index].id)
            .success(function(resp){
                    $scope.movies.splice(index, 1);
                }
            );
    };

});
