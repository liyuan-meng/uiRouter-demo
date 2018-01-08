'use strict';

angular.module("peopleDetail", ['people.checkPeople', 'getStateParams'])
    .component('peopleDetail', {
        templateUrl: './components/people-detail/people-detail.template.html',
        controller: ['CheckPeople', 'GetStateParams', '$scope',
            function peopleDetailController(CheckPeople, GetStateParams, $scope) {
                $scope.peopleDetails = [];
                CheckPeople.getData(GetStateParams.getParams()).then(function(data){
                    $scope.peopleDetails = data;
                });
            }
        ]
    });
