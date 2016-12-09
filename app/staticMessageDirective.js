(function(){
    angular.module('app').directive('staticMessageDirective', [staticMessageDirective]);

    function staticMessageDirective() {
        return {
            restrict: 'EA',
            template: '<h2>This is from directive</h2>'
        };
    }
})();