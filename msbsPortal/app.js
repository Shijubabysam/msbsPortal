var app = angular.module('mapp', ['navHeaderApp', 'nrmainapp', 'regmainapp', 'regapp', 'ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/header');
    $stateProvider
            .state('navHeader', {
                url: '/header',
                templateUrl: 'msbsPortal/components/navigationHome/navHeader.html',
                controller: 'navHeaderAppControl'
            })

            .state('second', {
                url: '/nrindex',
                templateUrl: 'msbsPortal/components/nrindex.html',
                controller: 'nrmaincontrol'
            })
            .state('third', {
                url: '/login',
                templateUrl: 'msbsPortal/components/regindex.html',
                controller: 'regmaincontrol'
            });
//            .state('home', {
//                url: '/home',
//                templateUrl: 'msbsPortal/components/home.html',
//                controller: 'maincontrol'
//            })

});
app.directive('ddTextCollapse', ['$compile', function ($compile) {
        return {
            restrict: 'A',
            scope: true,
            link: function (scope, element, attrs) {
                /* start collapsed */
                scope.collapsed = false;

                /* create the function to toggle the collapse */
                scope.toggle = function () {
                    scope.collapsed = !scope.collapsed;
                };

                /* wait for changes on the text */
                attrs.$observe('ddTextCollapseText', function (text) {

                    /* get the length from the attributes */
                    var maxLength = scope.$eval(attrs.ddTextCollapseMaxLength);


                    if (text.length > maxLength) {
                        /* split the text in two parts, the first always showing */
                        var firstPart = String(text).substring(0, maxLength);
                        var secondPart = String(text).substring(maxLength, text.length);


                        /* create some new html elements to hold the separate info */
                        var firstSpan = $compile('<span>' + firstPart + '</span>')(scope);
                        var secondSpan = $compile('<span ng-if="collapsed">' + secondPart + '</span>')(scope);
                        var moreIndicatorSpan = $compile('<span ng-if="!collapsed">... </span>')(scope);
                        var lineBreak = $compile('<br ng-if="collapsed">')(scope);
                        var toggleButton = $compile('<span class="collapse-text-toggle" ng-click="toggle()">{{collapsed ? "(less)" : "(more)"}}</span>')(scope);


                        /* remove the current contents of the element
                         and add the new ones we created */
                        element.empty();
                        element.append(firstSpan);
                        element.append(secondSpan);
                        element.append(moreIndicatorSpan);
                        element.append(lineBreak);
                        element.append(toggleButton);
                    }
                    else {
                        element.empty();
                        element.append(text);
                    }
                });
            }
        };
    }]);

app.controller('mcon', function ($scope) {

});

var navHeaderApp = angular.module("navHeaderApp", ['homeApp', 'aboutApp', 'facilityApp', 'doctorsApp', 'patientsApp', 'specialityApp', 'pharmacyApp', 'contactUsApp', 'ui.router']);
//'healthCheckUpApp', 'insuranceApp',
navHeaderApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("/header", "/header/home");
    $stateProvider
            .state('navHeader.home', {
                url: '/home',
                templateUrl: 'msbsPortal/components/home.html',
                controller: 'homeAppControl'
            })
            .state('navHeader.about', {
                url: '/aboutUs',
                templateUrl: 'msbsPortal/components/aboutUs/aboutUs.html',
                controller: 'aboutAppControl'
            })
            .state('navHeader.facility', {
                url: '/facility',
                templateUrl: 'msbsPortal/components/facility/facility.html',
                controller: 'facilityAppControl'
            })
            .state('navHeader.doctors', {
                url: '/doctors',
                templateUrl: 'msbsPortal/components/doctors/doctors.html',
                controller: 'doctorsAppControl'
            })
            .state('navHeader.patients', {
                url: '/patients',
                templateUrl: 'msbsPortal/components/patients/patients.html',
                controller: 'patientsAppControl'
            })
            .state('navHeader.speciality', {
                url: '/speciality',
                templateUrl: 'msbsPortal/components/speciality/speciality.html',
                controller: 'specialityAppControl'
            })
            .state('navHeader.farmacy', {
                url: '/farmacy',
                templateUrl: 'msbsPortal/components/pharmacy/pharmacy.html',
                controller: 'pharmacyAppControl'
            })
            .state('navHeader.healthCheckUp', {
                url: '/healthCheckUp',
                templateUrl: 'msbsPortal/components/healthCheckUp/healthCheckUp.html',
                controller: 'healthCheckUpAppControl'
            })
            .state('navHeader.insurance', {
                url: '/insurance',
                templateUrl: 'msbsPortal/components/insurance/insurance.html',
                controller: 'insuranceAppControl'
            })
            .state('navHeader.contactUs', {
                url: '/contactUs',
                templateUrl: 'msbsPortal/components/contactUs/contactUs.html',
                controller: 'contactUsAppControl'
            });
});
navHeaderApp.controller("navHeaderAppControl", function ($scope, $state) {

});
var homeApp = angular.module("homeApp", []);
homeApp.controller("homeAppControl", function ($scope, $state, $timeout) {
//    $scope.$on('$viewContentLoaded', function () {
//        $timeout(function () {
//            $('.menu').click(function () {
//                console.log('shiju');
//                $('.mainNav').toggleClass('active');
//            })
//        }, 0);
//    });
    $scope.$on('$viewContentLoaded', function () {
        console.log('shiju');
        $timeout(function () {
            $(".index-slider").slick({dots: !1, infinite: !0, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 2e3, arrows: !0, speed: 1e3, responsive: [{breakpoint: 1024, settings: {dots: !1, arrows: !1, adaptiveHeight: !0}}]}), $(".services-slider").slick({dots: !1, infinite: !0, slidesToShow: 3, slidesToScroll: 1, autoplay: !1, autoplaySpeed: 500, arrows: !0, speed: 1500, responsive: [{breakpoint: 1025, settings: {arrows: !1, dots: !1, slidesToShow: 1}}, {breakpoint: 900, settings: {arrows: !1, dots: !1, slidesToShow: 1}}]}), $(".clients-slider").slick({dots: !1, infinite: !0, slidesToShow: 5, slidesToScroll: 1, autoplay: !0, autoplaySpeed: 500, arrows: !0, speed: 1e3}), $(".d-center").slick({dots: !0, infinite: !0, slidesToShow: 1, slidesToScroll: 1, autoplay: !1, autoplaySpeed: 500, arrows: !0, speed: 1e3, responsive: [{breakpoint: 1025, settings: {dots: !1, slidesToShow: 1, adaptiveHeight: !0}}]}), $(".box-flex-slider").slick({dots: !0, infinite: !0, slidesToShow: 4, slidesToScroll: 1, autoplay: !1, autoplaySpeed: 500, arrows: !0, speed: 1e3, responsive: [{breakpoint: 1024, settings: {slidesToShow: 3, slidesToScroll: 3, infinite: !0, dots: !0}}]}), $(".ipn11-flex-slider").slick({dots: !0, infinite: !0, slidesToShow: 5, slidesToScroll: 1, autoplay: !1, autoplaySpeed: 500, arrows: !0, speed: 1e3, responsive: [{breakpoint: 1025, settings: {dots: !1, slidesToShow: 2, adaptiveHeight: !0}}]});
            $(".news-slider").slick({dots: !0, infinite: !0, slidesToShow: 1, slidesToScroll: 1, autoplay: !1, autoplaySpeed: 500, arrows: !0, speed: 1e3, fade: !0}), $(".trigger").on("click", function () {
                $(".nav").toggle();
            });
            $(".enquiry button").on("click", function () {
                $(".enquiry").toggleClass("open");
            });
        }, 0);
    });
});

var aboutApp = angular.module("aboutApp", []);
aboutApp.controller("aboutAppControl", function ($scope, $state) {

});

var facilityApp = angular.module("facilityApp", []);
facilityApp.controller("facilityAppControl", function ($scope, $state) {
    $scope.longText = "Patients are registered at the reception and are seen on first come, first serve basis, however out of turn consultation may be provided in case of emergency and senior citizen. Patients have the right to consult any doctor. In OPD, clinical consultation is provided to patients which includes history taking, clinical examination, diagnosis and providing prescription to patients besides advising laboratory tests in some cases. OPD has a waiting hall with chairs, a TV, public utilities like drinking water and toilets. Sub waiting areas are available in front of individual consultation rooms. Wheel chairs, trolleys and attendants are there to help very sick patients.";
    $scope.longTextArray = [
        {id: 0, image: 'assets/images/facility/homeopathy.jpg', headText: 'OPD (Allopathy & Homeopathy):', bodyTxt: 'Patients are registered at the reception and are seen on first come, first serve basis, however out of turn consultation may be provided in case of emergency and senior citizen. Patients have the right to consult any doctor. In OPD, clinical consultation is provided to patients which includes history taking, clinical examination, diagnosis and providing prescription to patients besides advising laboratory tests in some cases. OPD has a waiting hall with chairs, a TV, public utilities like drinking water and toilets. Sub waiting areas are available in front of individual consultation rooms. Wheel chairs, trolleys and attendants are there to help very sick patients.'},
        {id: 1, image: 'assets/images/facility/dental.jpg', headText: 'Dental facility:', bodyTxt: 'An experienced Dental surgeon provides procedures like Dental Extractions, RCT, Scaling /Cleaning, Fillings, Local curettage.'},
        {id: 2, image: 'assets/images/facility/ward.jpg', headText: 'Ward/ Indoor facility:', bodyTxt: 'Ward facilities for observation and management of medical problem like typhoid, acute gastroenteritis, COPD, bronchial asthma, malaria, viral fever, pneumonias etc. There are 3 wards, one special room and one well equipped emergency.'},
        {id: 3, image: 'assets/images/facility/OT.jpg', headText: 'Minor OT/ Dressing Room:', bodyTxt: 'Provides services for minor surgical procedure like dressing of lacerated wound, suturing of minor lacerations & resuturing.'},
        {id: 4, image: 'assets/images/facility/physio.jpg', headText: 'Physiotherapy:', bodyTxt: 'Range of physiotherapy services to assist the patients to recover from wide range of musculoskeletal pain-ful disorders. Available modalities are MWD, SWD, U/S, TENS, IFC laser therapy traction unit, magnolia.'},
        {id: 5, image: 'assets/images/facility/lab.jpg', headText: 'Laboratory services:', bodyTxt: 'Trained laboratory staff are providing best services which includes painless blood withdrawal Services of one NABL accredited laboratory are also available for carrying out specialised tests, they collect sample from 8 AM to 12 noon. In MSBS Hospital.<br> Sample collection time for MSBS laboratory is 8 am to 10.30 am and upto 11:00 am for student while emergency tests like Blood sugar, platelet count & blood grouping done in emergent cases throughout OPD hours.'},
        {id: 6, image: 'assets/images/facility/ecg.jpg', headText: 'ECG Services:', bodyTxt: '24hours ECG services including machine report, done by trained staff.'},
        {id: 7, image: 'assets/images/facility/pharmacy.jpg', headText: 'Pharmacy:', bodyTxt: 'Free reliable quality medicines are available to beneficiaries on doctor prescription during OPD hours. Medicines not available are provided by S.O. signed by prescribing Doctor and Head and collected from on campus chemist shop.'},
        {id: 8, image: 'assets/images/facility/xray.jpg', headText: 'Radiology/X-ray facility:', bodyTxt: 'X-Ray pleophos-D, 300 MA Siemens available, X-rays done on all working days during OPD hour. Sonoline G-50 U/S machine, Siemens. Ultrasounds are done once a week.'},
        {id: 9, image: 'assets/images/facility/amb.jpg', headText: 'Ambulance Services:', bodyTxt: '24 hours patient transport vehicle available. Patients are transported from home (on campus) to MSBS hospital and patients referred by emergency duty doctor to empanelled hospital for specialized care.'},
        {id: 10, image: 'assets/images/facility/intercontinent.jpg', headText: 'Intercontinental Food:', bodyTxt: 'The hospital is equipped to serve Continental and Intercontinental cuisine customized for the patients to suite their palate. This makes our patients feel comfortable & facilitates a speedy recovery.'},
        {id: 11, image: 'assets/images/facility/dinning.jpg', headText: 'Guest Dining Hall:', bodyTxt: 'The Guest Dining Hall is situated in the basement, where breakfast, lunch and dinner are available. Room service is also available. A 24-hour coffee shop is situated at the ground floor.'},
        {id: 12, image: 'assets/images/facility/park.jpg', headText: 'Parking:', bodyTxt: 'The parking at Apollo Bangalore is designed to be customer friendly, the parking space can accommodate about 250 cars & 350 two wheelers at any given time. To relive the stress of walk-in patients to the hospital there is valet parking facility.'},
        {id: 13, image: 'assets/images/facility/interne.jpg', headText: 'Internet:', bodyTxt: 'The hospital has both broadband connectivity & is Wifi enabled, patients can access internet in the patient rooms &Wifi in the lounge.'},
        {id: 14, image: 'assets/images/facility/laundry.jpg', headText: 'Laundry Services:', bodyTxt: 'At Apollo, we take pride in putting our customers first. We have a unique understanding of the needs of our patients. We have a good support staff who are polite to help you with laundry services.'},
        {id: 15, image: 'assets/images/facility/tele.jpg', headText: 'Telecommunication Services:', bodyTxt: 'Telephone access to STD & ISD are provided in the patients rooms to make their hospital stay comfortable.'},
        {id: 16, image: 'assets/images/facility/interpretate.jpg', headText: 'Interpretation Services:', bodyTxt: 'Translators or Interpreters for various languages are available for your easy communication. For assistance please contact Reception.'},
        {id: 17, image: 'assets/images/facility/post.jpg', headText: 'Postage:', bodyTxt: 'Postal facility is available at the Dispatch Section in the ground floor.'},
        {id: 18, image: 'assets/images/facility/security.jpg', headText: 'Security:', bodyTxt: 'Safe deposit lockers are available at the security office. In case of theft or loss, security may be notified immediately. Unclaimed items, found in the hospital premises, may also be handed over to security office at the ground floor.'},
        {id: 19, image: 'assets/images/facility/trans.jpg', headText: 'Transport:', bodyTxt: 'Ambulance services are available for pick up and drop. Please contact ambulance department at the ground floor (Near Emergency).'},
        {id: 20, image: 'assets/images/facility/atm.jpg', headText: 'Bank & ATM:', bodyTxt: 'There is an ATM within the hospital premises to facilitate easy access to the cash in case of any requirements'},
        {id: 21, image: 'assets/images/facility/currencyEx.jpg', headText: 'Money Transfer & Currency Exchange:', bodyTxt: 'Money transfer to the patient account in the hospital can be done through swift banking, so is the currency exchange where the money is transferred to the hospital account in the bank which exchanges the currency & credits it to the respective patients account for billing purpose. We do have a currency exchange facility in hospital and also western union money transfer located 100mts away from the facility.'},
        {id: 22, image: 'assets/images/facility/cofeeday.jpg', headText: 'Cafe Coffee Day:', bodyTxt: 'Café coffee day, India’s most popular chain of coffee shops is housed within the hospital premises for people to de-stress over a cup of coffee.'}
    ];
    console.log($scope.longTextArray);
});

var doctorsApp = angular.module("doctorsApp", []);
doctorsApp.controller("doctorsAppControl", function ($scope, $state) {

});

var patientsApp = angular.module("patientsApp", []);
patientsApp.controller("patientsAppControl", function ($scope, $state) {

});

var specialityApp = angular.module("specialityApp", []);
specialityApp.controller("specialityAppControl", function ($scope, $state) {

});

var pharmacyApp = angular.module("pharmacyApp", []);
pharmacyApp.controller("pharmacyAppControl", function ($scope, $state) {

});

//var healthCheckUpApp = angular.module("healthCheckUpApp", []);
//healthCheckUpApp.controller("healthCheckUpAppControl", function ($scope, $state) {
//
//});
//
//var insuranceApp = angular.module("insuranceApp", []);
//healthCheckUpApp.controller("insuranceAppControl", function ($scope, $state) {
//
//});

var contactUsApp = angular.module("contactUsApp", []);
contactUsApp.controller("contactUsAppControl", function ($scope, $state) {

});

var module = angular.module("nrmainapp", []);
module.controller("nrmaincontrol", function ($scope, $state) {

});

var rapp = angular.module("regmainapp", ['regapp', 'ui.router']);
rapp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("/login", "/login/appointmenthome");
    $stateProvider
            .state('third.appointmenthome', {
                url: '/appointmenthome',
                templateUrl: 'msbsPortal/components/appointment/loginHome/loginHome.html',
                controller: 'regappcon'
            });
});

rapp.controller("regmaincontrol", function ($scope, $state) {

});

var regApp = angular.module("regapp", ['ui.router']);

regApp.controller("regappcon", function ($scope, $timeout) {
//    , $timeout

});

