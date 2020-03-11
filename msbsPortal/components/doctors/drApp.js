var drApp = angular.module('drHomeApp', ['drDashboardApp', 'drAppointmentApp', 'drPracticeLocApp', 'drSettingsHomeApp', 'ui.router']);
drApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/drDashboard');
    $urlRouterProvider.when("/drHome", "/drHome/drDashboard");
    $stateProvider
            .state('drHome.drDashboard', {
                url: '/drDashboard',
                templateUrl: 'msbsPortal/components/doctors/dashboard/dashboard.html',
                controller: 'drDashboardAppControl'
            })
            .state('drHome.drAppointment', {
                url: '/drAppointment',
                templateUrl: 'msbsPortal/components/doctors/myAppointment/myAppointment.html',
                controller: 'drAppointmentAppControl'
            })
            .state('drHome.drPracticeLocation', {
                url: '/drPracticeLocation',
                templateUrl: 'msbsPortal/components/doctors/practiceLocation/practiceLocation.html',
                controller: 'drPracticeLocationControl'
            })
            .state('drHome.drSetting', {
                url: '/drSetting',
                templateUrl: 'msbsPortal/components/doctors/settings/settingsHome.html',
                controller: 'drSettingsHomeAppControl'
            });
});
//-----------------------drHome-------------------------------------

drApp.controller("drHomeAppControl", function ($scope, $state, $timeout) {
//    $scope.$on('$viewContentLoaded', function () {
//        console.log('shiju23');
//        $timeout(function () {
//            $(".index-slider").slick({dots: !1, infinite: !0, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 2e3, arrows: !0, speed: 1e3, responsive: [{breakpoint: 1024, settings: {dots: !1, arrows: !1, adaptiveHeight: !0}}]}), $(".services-slider").slick({dots: !1, infinite: !0, slidesToShow: 3, slidesToScroll: 1, autoplay: !1, autoplaySpeed: 500, arrows: !0, speed: 1500, responsive: [{breakpoint: 1025, settings: {arrows: !1, dots: !1, slidesToShow: 1}}, {breakpoint: 900, settings: {arrows: !1, dots: !1, slidesToShow: 1}}]}), $(".clients-slider").slick({dots: !1, infinite: !0, slidesToShow: 5, slidesToScroll: 1, autoplay: !0, autoplaySpeed: 500, arrows: !0, speed: 1e3}), $(".d-center").slick({dots: !0, infinite: !0, slidesToShow: 1, slidesToScroll: 1, autoplay: !1, autoplaySpeed: 500, arrows: !0, speed: 1e3, responsive: [{breakpoint: 1025, settings: {dots: !1, slidesToShow: 1, adaptiveHeight: !0}}]}), $(".box-flex-slider").slick({dots: !0, infinite: !0, slidesToShow: 4, slidesToScroll: 1, autoplay: !1, autoplaySpeed: 500, arrows: !0, speed: 1e3, responsive: [{breakpoint: 1024, settings: {slidesToShow: 3, slidesToScroll: 3, infinite: !0, dots: !0}}]}), $(".ipn11-flex-slider").slick({dots: !0, infinite: !0, slidesToShow: 5, slidesToScroll: 1, autoplay: !1, autoplaySpeed: 500, arrows: !0, speed: 1e3, responsive: [{breakpoint: 1025, settings: {dots: !1, slidesToShow: 2, adaptiveHeight: !0}}]});
//            $(".news-slider").slick({dots: !0, infinite: !0, slidesToShow: 1, slidesToScroll: 1, autoplay: !1, autoplaySpeed: 500, arrows: !0, speed: 1e3, fade: !0}), $(".trigger").on("click", function () {
//                $(".nav").toggle();
//            });
//            $(".enquiry button").on("click", function () {
//                $(".enquiry").toggleClass("open");
//            });
//        }, 0);
//    });
});

var drDashboardApp = angular.module("drDashboardApp", []);
drDashboardApp.controller("drDashboardAppControl", function ($scope, $state) {

});

var drAppointmentApp = angular.module("drAppointmentApp", []);
drAppointmentApp.controller("drAppointmentAppControl", function ($scope, $state) {

});

var drPracticeLocApp = angular.module("drPracticeLocApp", []);
drPracticeLocApp.controller("drPracticeLocationControl", function ($scope, $state) {

});

var drSettingsHomeApp = angular.module("drSettingsHomeApp", []);
drSettingsHomeApp.controller("drSettingsHomeAppControl", function ($scope, $state) {

});