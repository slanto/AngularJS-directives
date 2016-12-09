angular.module('app')
    .controller('LabController', [function() {
        var vm = this;
        vm.show = show;
       
        vm.person = {
            name: 'Samuel Clemens',
            penName: 'Mark Twain'
        };
        function show(){
            alert(JSON.stringify(vm.person));
        };        

        vm.authors = [{
            name: "Mark Twain",
            nationality: "American",
            dates: '1835-1910'
        },
        {
            name: "AA Milne",
            nationality: "English",
            dates: '1882-1956'
        }];
    }]);