//This app will work with static data type.......
// important Links to study
//http://angular-ui.github.io/bootstrap/
//http://fdietz.github.io/recipes-with-angular-js/common-user-interface-patterns/paginating-through-client-side-data.html

var testVar;

(function() {

    //moudule creation in Angular Js
    var app = angular.module('AssessmentModule', []);

    //controller to work upon html and data
    app.controller('CandidateController', function($rootScope) {
        this.candidateCollections = GetCandidateData();
        // $rootScope.ggg = false;
        // $scope.clickHandler = function() {
        //     $rootScope.ggg = !$rootScope.ggg;
        // };
    });

    //Controller to deal with class append as per status //More over it's UI cotroller
    app.controller('CandidatStatusController', function() {

        this.status = "";

        // this.setCallOnStatus = function(Status) {
        //     this.status = ""
        //     if (Status == "Attended")
        //         this.status = "label-default"
        //     else if (Status == "Attending")
        //         this.status = "label-info"
        //     else if (Status == "Password Disabled")
        //         this.status = "label-warning";
        //     else if (Status == 'Not Attended')
        //         this.status = 'label-danger';

        //     return this.status;
        // }

    });

    //Controller to display Active and In-Active Test Boxes
    app.controller('TestController', function() {
        this.testCollection = GetTestCollection();
        // for (var i = 0; i < testCollection.length; i++) {
        //     testCollection[i]
        // };

    });


})();


//Static Data to work upon

//var GetTestCollection =
    
// function() {

//     var test1 = {
//         TestStatus: 'Active'
//     };

//     var test2 = {
//         TestStatus: 'InActive'
//     };

//     var test3 = {
//         TestStatus: 'Active'
//     };

//     var test4 = {
//         TestStatus: 'InActive'
//     };

//     var test5 = {
//         TestStatus: 'Active'
//     };

//     var test6 = {
//         TestStatus: 'InActive'
//     };

//     var test7 = {
//         TestStatus: 'Active'
//     };

//     var test8 = {
//         TestStatus: 'InActive'
//     };

//     var test9 = {
//         TestStatus: 'Active'
//     };

//     var test10 = {
//         TestStatus: 'InActive'
//     };

//     var test11 = {
//         TestStatus: 'Active'
//     };

//     var test12 = {
//         TestStatus: 'InActive'
//     };

//     var test13 = {
//         TestStatus: 'Active'
//     };

//     var test14 = {
//         TestStatus: 'InActive'
//     };

//     var testCollection = [test1, test2, test3, test4, test5, test6, test7, test8, test9, test10, test11, test12, test13, test14];

//     return testCollection;
// }

var GetCandidateData = function() {

    var candidate1 = {
        ID: '45345',
        CandidateName: 'Saurabh',
        CandidateEmail: 'Saurabh@gmail.com',
        LoginTime: '4/12/2013 10:20am',
        LogoutTime: '4/12/2013 2:50pm',
        Status: 'Attended',
    };

    var candidate2 = {
        ID: '45346',
        CandidateName: 'Prateek',
        CandidateEmail: 'Prateek@gmail.com',
        LoginTime: '4/12/2013 10:20am',
        LogoutTime: '4/12/2013 2:50pm',
        Status: 'Password Disabled',
    };

    var candidate3 = {
        ID: '45347',
        CandidateName: 'Saurabh Jha',
        CandidateEmail: 'SaurabhJha@gmail.com',
        LoginTime: '4/12/2013 10:20am',
        LogoutTime: '4/12/2013 2:50pm',
        Status: 'Attended',
    };

    var candidate4 = {
        ID: '45348',
        CandidateName: 'Biswa',
        CandidateEmail: 'Biswa@gmail.com',
        LoginTime: '4/12/2013 10:20am',
        LogoutTime: '4/12/2013 2:50pm',
        Status: 'Not Attended',
    };

    var candidate5 = {
        ID: '45349',
        CandidateName: 'Murali',
        CandidateEmail: 'Murali@gmail.com',
        LoginTime: '4/12/2013 10:20am',
        LogoutTime: '4/12/2013 2:50pm',
        Status: 'Attended',
    };

    var candidate6 = {
        ID: '45350',
        CandidateName: 'Rohan',
        CandidateEmail: 'Rohan@gmail.com',
        LoginTime: '4/12/2013 10:20am',
        LogoutTime: '4/12/2013 2:50pm',
        Status: 'Attending',
    };

    var candidateCollection = [candidate1, candidate2, candidate3, candidate4, candidate5, candidate6];

    return candidateCollection;

}