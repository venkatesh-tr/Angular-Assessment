(function() {

    var app = angular.module('CandidateTableModule', []);

    app.controller('CandidateController', function() {

        this.candidateCollections = candidates;

    });

    var candidates = [

        {
            "ID": "45345",
            "CandidateName": "Saurabh",
            "CandidateEmail": "Saurabh@gmail.com",
            "LoginTime": "4/12/2013 10:20am",
            "LogoutTime": "4/12/2013 2:50pm",
            "Status": "Attended",
        },

        {
            "ID": "45346",
            "CandidateName": "Prateek",
            "CandidateEmail": "Prateek@gmail.com",
            "LoginTime": "4/12/2013 10:20am",
            "LogoutTime": "4/12/2013 2:50pm",
            "Status": "Password Disabled",
        },

        {
            "ID": "45347",
            "CandidateName": "Saurabh Jha",
            "CandidateEmail": "SaurabhJha@gmail.com",
            "LoginTime": "4/12/2013 10:20am",
            "LogoutTime": "4/12/2013 2:50pm",
            "Status": "Attended",
        }

    ];



})();