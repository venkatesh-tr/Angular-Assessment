(function() {
    var mainModule = angular.module('MainModule', []);


    //-----------------------Region: Candidate-----------------------------------------//

    // mainModule.controller('CandidateGridCtrl', ['$http',
    //     function($http) {
    //         var candidate_management = this;
    //         candidate_management.candidateCollection = {};
    //         $http.get('js/candidate.json').success(function(data) {
    //             candidate_management.candidateCollection = data;
    //         })

    //     }
    // ]);

    mainModule.directive('candidateGrid', [
        function() {
            return {
                restrict: 'E',
                templateUrl: 'grid-candidate.html',
                controller: function($http) {
                    var candidate_management = this;
                    candidate_management.candidateCollection = {};
                    $http.get('js/candidate.json').success(function(data) {
                        candidate_management.candidateCollection = data;
                    })

                },
                controllerAs: "candidateCtrl"
            };
        }
    ])
    //-----------------------End-Region: Candidate-----------------------------------------//

})();