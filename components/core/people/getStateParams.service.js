"use strict";

angular.module("getStateParams", ['ui.router']).
    factory("GetStateParams", ["$location", function ($location) {
        return {
            getParams: getParams
        };
        function getParams() {
            var partUrlArr = $location.url().split("/");
            return partUrlArr[partUrlArr.length-1];
        }
}]);
