'use strict';

angular.module("peopleList", ['people.checkPeople'])
    .component('peopleList', {
        templateUrl: './components/people-list/people-list.template.html',
        controller: ['CheckPeople',
            function PeopleListController(CheckPeople) {
                this.people = CheckPeople.getData();
            }
        ]
    });