"use strict";

angular.module('movie.core').service("Movie", function($http) {
        var API_URI = '/api/movies';

        this.fetch = function() {
            return $http.get(API_URI);
        };

        this.create = function(movie) {
            return $http.post(API_URI, movie);
        };

        this.remove = function(id) {
            return $http.delete(API_URI + '/' + id);
        };

        this.fetchOne = function(id) {
            return $http.get(API_URI + '/' + id);
        };

        this.update = function(movie) {
            return $http.put('/api/movies', movie);
        };

    }
);
