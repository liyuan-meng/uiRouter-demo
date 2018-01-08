'use strict';

angular.module("peopleList", ['people.checkPeople'])
    .component('peopleList', {
        templateUrl: './components/people-list/people-list.template.html',
        controller: ['CheckPeople','$scope',
            function PeopleListController(CheckPeople, $scope) {
                $scope.people = [];
                CheckPeople.getData().then(function(data){
                    $scope.people = data;
                });
            }
        ]
    });
