'use strict';

angular.module("helloSolarSystem",
    ['peopleList', 'peopleDetail', 'hello','ui.router']).
    config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider.state('helloState', {
            url: '/helloState',
            template:'<hello></hello>'
        }).state('aboutState', {
            url: '/about',
            template: '<h4>Its the UI-Router Hello Solar System app!</h4>'
        }).state('peopleState', {
            url: '/peopleList',
            template:'<people-list></people-list>'
        }).state('peopleState.details', {
            url:'/detail/:id',
            template: '<people-detail></people-detail>'
        })
    }
]);
