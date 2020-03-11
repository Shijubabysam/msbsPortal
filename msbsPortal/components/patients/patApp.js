var patApp = angular.module('patHomeApp', ['patMyDocApp', 'ehrHomeApp', 'summaryHomeApp', 'demographicsHomeApp', 'linkedUsersHomeApp', 'prescriptionHomeApp', 'ui.router']);
patApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/myDoctors');
    $urlRouterProvider.when("/patHome", "/patHome/myDoctors");
    $stateProvider
            .state('patHome.myDoctors', {
                url: '/myDoctors',
                templateUrl: 'msbsPortal/components/patients/myDoctors/myDoctors.html',
                controller: 'patMyDocAppControl'
            })
            .state('patHome.ehrHome', {
                url: '/ehrHome',
                templateUrl: 'msbsPortal/components/patients/ehr/ehrHome/ehrHome.html',
                controller: 'patEHRAppControl'
            })
            .state('patHome.summaryHome', {
                url: '/summaryHome',
                templateUrl: 'msbsPortal/components/patients/summarization/summarizationHome/summarizationHome.html',
                controller: 'patSummaryAppControl'
            })
            .state('patHome.demographyHome', {
                url: '/demographyHome',
                templateUrl: 'msbsPortal/components/patients/demographics/demographicsHome/demographicsHome.html',
                controller: 'patDemographyAppControl'
            })
            .state('patHome.linkedUsersHome', {
                url: '/linkedUsersHome',
                templateUrl: 'msbsPortal/components/patients/linkedUsers/linkedUsersHome/linkedUsersHome.html',
                controller: 'patLinkedUserAppControl'
            })
            .state('patHome.prescriptionHome', {
                url: '/prescriptionHome',
                templateUrl: 'msbsPortal/components/patients/prescription/prescriptionHome/prescriptionHome.html',
                controller: 'patPrescriptionAppControl'
            });

});

patApp.controller("patHomeAppControl", function ($scope, $state) {

});

var patMyDocApp = angular.module("patMyDocApp", []);
patMyDocApp.controller("patMyDocAppControl", function ($scope, $state) {

});

var ehrHomeApp = angular.module("ehrHomeApp", []);
ehrHomeApp.controller("patEHRAppControl", function ($scope, $state) {

});

var summaryHomeApp = angular.module("summaryHomeApp", []);
summaryHomeApp.controller("patSummaryAppControl", function ($scope, $state) {

});

var demographicsHomeApp = angular.module("demographicsHomeApp", []);
demographicsHomeApp.controller("patDemographyAppControl", function ($scope, $state) {

});

var linkedUsersHomeApp = angular.module("linkedUsersHomeApp", []);
linkedUsersHomeApp.controller("patLinkedUserAppControl", function ($scope, $state) {

});

var prescriptionHomeApp = angular.module("prescriptionHomeApp", []);
prescriptionHomeApp.controller("patPrescriptionAppControl", function ($scope, $state) {

});
