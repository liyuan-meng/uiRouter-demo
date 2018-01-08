'use strict';

angular.module("hello", [])
    .component('hello', {
        templateUrl: './components/hello/hello.template.html',
        controller: ["$scope", 
            function HelloController($scope) {
                $scope.hideFirstContent = false;
                $scope.ctlButton = function () {
                    this.hideFirstContent = !this.hideFirstContent;
                };
            }
        ]
    });
