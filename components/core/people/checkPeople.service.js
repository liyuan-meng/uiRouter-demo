'use strict';

//根据条件（参数）查找信息。
angular.module('people.checkPeople', ['ui.router']).
    factory('CheckPeople', ['$http', function ($http) {
        return {
            getData: getData
        };
        function getData(filed) {
            var people ;
            $http.get({
                method: 'GET',
                url: './data/people.json'
            }).then(function (response) {
                if(filed) {
                    people = response.data.map(function (value) {
                        if(people[filed.key] === filed.value) {
                            return value;
                        }
                    })
                } else {
                    people = response.data;
                }
            })
        }
}]);