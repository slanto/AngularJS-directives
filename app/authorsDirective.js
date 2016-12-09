(function () {
    angular.module('app')
        .directive('authors', [authors]);

    function authors() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                data: '='
            },
            templateUrl: '/app/templates/authors.html',
            controller: function () {
                var vm = this;
                vm.details = function(person) {
                    alert(person.name);
                }
            },
            controllerAs: 'vm'
        };
    };
})();