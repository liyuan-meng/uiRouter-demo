'use strict';

angular.module('hello.toggleContent')
    .factory('ToggleContent', function () {
        return {
            toggleContent: toggleContent
        };

        function toggleContent(showState) {
            return !showState;
        }
});