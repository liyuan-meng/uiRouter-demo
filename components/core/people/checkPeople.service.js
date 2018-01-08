'use strict';

//根据条件（参数）查找信息。
angular.module('people.checkPeople', ['ui.router']).
    factory('CheckPeople', ['$http', function ($http) {
        return {
            getData: getData
        };
        function getData(filed) {
            var people;
            var promise =  $http({
                method: 'GET',
                url: './data/people.json'
            }).then(function (response) {
                if (filed) {
                    people = response.data.filter(function (value) {
                        if (Number(value.id) === Number(filed)) {
                            return value;
                        }
                    })
                } else {
                    people = response.data;
                }
                return people;
            });
            return promise;
        }
    }]);
