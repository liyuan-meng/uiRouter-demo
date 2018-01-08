'use strict';

angular.module("helloSolarSystem",
    ['peopleList', 'peopleDetail', 'hello','ui.router']).
    config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider.state('helloState', {
            url: '/helloState',
            templateUrl: './components/hello/hello.template.html'
        }).state('aboutState', {
            url: '/about',
            template: '<h4>Its the UI-Router Hello Solar System app!</h4>'
        }).state('peopleState', {
            url: '/peopleList',
            templateUrl: './components/people-list/people-list.template.html'
        }).state('peopleState.details', {
            url:'^/detail/:id',
            templateUrl: './components/people-detail/people-detail.template.html'
        })
    }
]);
