'use strict';

angular.module("helloSolarSystem").config(function ($stateProvider) {
    $stateProvider.state('hello', {
        url: '/helloState',
        templateUrl: './components/hello/hello.template.js',
        controller: 'peopleDetail'
    }).state('aboutState', {
        url: '/about',
        template: '<h4>Its the UI-Router Hello Solar System app!</h4>'
    }).state('peopleState', {
        url: '/peopleList',
        templateUrl: ''
    }).state()
});
