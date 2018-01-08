'use strict';

angular.module("peopleDetail", ['people.checkPeople', 'getStateParams'])
    .component('peopleDetail', {
        template: './components/people-detail/people-detail.template.html',
        controller: ['CheckPeople', 'GetStateParams',
            function peopleDetailController(CheckPeople, GetStateParams) {
                this.peopleDetails = CheckPeople(GetStateParams.getParams());
            }
        ]
    });