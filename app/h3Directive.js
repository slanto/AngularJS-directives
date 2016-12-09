(function(){
    angular.module('app')
        .directive('h3Directive', [h3Directive]);
    
    function h3Directive() {
        return {
            restrict: 'EA',
            replace: true,
            template: '<h3>{{title}}</h3>',
            scope: {
                title: '@'
            },
            link: function(scope, elem, attrs) {
                elem.bind('mouseenter', function(){
                    elem.css('background-color', 'red');
                });
                elem.bind('mouseleave', function(){
                    elem.css('background-color', 'silver');
                });
            }
        }
    };
})();