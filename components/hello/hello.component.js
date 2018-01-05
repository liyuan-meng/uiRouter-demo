'use strict';

angular.module("hello", ['hello.toggleContent'])
    .component('hello', {
        templateUrl: './components/hello/hello.template.html',
        controller: ['ToggleContent',
            function (ToggleContent) {
                var self = this;
                this.showFirstContent = true;
                this.ctlButton = function() { ToggleContent.toggleContent(self.showFirstContent); };
        }]
    });