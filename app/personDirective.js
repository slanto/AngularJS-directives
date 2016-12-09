(function(){
    angular.module('app').directive('person', [person]);
    function person(){
        return {
            restrict: 'E',
            replace: true,
            scope: {
                person: '=',
                action: '&'
            },
            templateUrl: './app/templates/person.html'
        }
    }
})();