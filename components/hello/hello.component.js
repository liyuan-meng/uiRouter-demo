'use strict';

angular.module("hello", [])
    .component('hello', {
        templateUrl: './components/hello/hello.template.html',
        controller: [
            function HelloController() {
                this.hideFirstContent = false;
                this.ctlButton = function () {
                    alert(433);
                    this.hideFirstContent = !this.hideFirstContent;
                };
            }
        ]
    });