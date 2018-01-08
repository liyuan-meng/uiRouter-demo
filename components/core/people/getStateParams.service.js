"use strict";

angular.module("getStateParams", ['ui.router']).
    factory("GetStateParams", ["$location", function () {
        return {
            getParams: getParams
        };
        function getParams() {
            return $location.search();
        }
}]);