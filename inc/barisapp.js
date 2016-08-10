var barisApp = angular.module('barisApp', ['ngRoute']);

barisApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeCtrl'
    })

    $routeProvider
    .when('/cakes', {
        templateUrl: 'pages/cakes.html',
        controller: 'cakesCtrl'
    })

    $routeProvider
    .when('/cookies', {
        templateUrl: 'pages/cookies.html',
        controller: 'cookiesCtrl'
    })

    $routeProvider
    .when('/cart', {
        templateUrl: 'pages/cart.html',
        controller: 'cartCtrl'
    })

    .when('/contactus', {
        templateUrl: 'pages/contactus.html',
        controller: 'contactusCtrl'
    })

    .when('/register', {
        templateUrl: 'pages/register.html',
        controller: 'registerCtrl'
    });

});

barisApp.controller('mainCtrl', function ($rootScope, $scope, $location, $http) {

    $scope.cakes = [
                {name: 'Saba', img: 'img/cakes/1.jpg' , price: 220 },
                {name: 'Elephant', img: 'img/cakes/2.jpg' , price: 240 },
                {name: 'Mickey', img: 'img/cakes/3.jpg' , price: 280 },
                {name: 'Hadar', img: 'img/cakes/4.jpg' , price: 320 },
                {name: 'Osama', img: 'img/cakes/5.jpg' , price: 255 },
                {name: 'Angel', img: 'img/cakes/6.jpg' , price: 275.5 },
                {name: 'Neta', img: 'img/cakes/7.jpg' , price: 285.5 },
                {name: 'Hamsa', img: 'img/cakes/8.jpg' , price: 220 },
                {name: 'Pony', img: 'img/cakes/9.jpg' , price: 330 },
                {name: 'Yotam', img: 'img/cakes/10.jpg' , price: 300 },
                {name: 'Aviv', img: 'img/cakes/11.jpg' , price: 240 },
                {name: 'Monkey', img: 'img/cakes/12.jpg' , price: 255 },
                {name: 'Kitty', img: 'img/cakes/13.jpg' , price: 275.5 },
                {name: 'Tzafhon', img: 'img/cakes/14.jpg' , price: 280 },
                {name: 'Basketball', img: 'img/cakes/15.jpg' , price: 300 },
                {name: 'Arts', img: 'img/cakes/16.jpg' , price: 250 },
                {name: 'Millana', img: 'img/cakes/17.jpg' , price: 255 },
                {name: 'Bear', img: 'img/cakes/18.jpg' , price: 275.5 },
                {name: 'Mermaid', img: 'img/cakes/19.jpg' , price: 260 },
                {name: 'Princess', img: 'img/cakes/20.jpg' , price: 300 },
                {name: 'Survivor', img: 'img/cakes/21.jpg' , price: 320 }
                ];

    $scope.cookies = [
                {name: 'Alfhors', img: 'img/cookies/1.jpg' , price: 8.5 },
                {name: 'Cassata', img: 'img/cookies/2.jpg' , price: 7.75 },
                {name: 'Sqaures', img: 'img/cookies/3.jpg' , price: 9.5 },
                {name: 'ChocoChips', img: 'img/cookies/4.jpg' , price: 9.25 },
                {name: 'Emoji', img: 'img/cookies/5.jpg' , price: 5 },
                {name: 'Flowers', img: 'img/cookies/6.jpg' , price: 8 },
                {name: 'Chocolate', img: 'img/cookies/7.jpg' , price: 7 },
                {name: 'Rainbow', img: 'img/cookies/8.jpg' , price: 7.5 },
                {name: 'Hearts', img: 'img/cookies/9.jpg' , price: 8.25 },
                {name: 'M&M', img: 'img/cookies/10.jpg' , price: 11 },
                {name: 'Monster', img: 'img/cookies/11.jpg' , price: 10.5 },
                {name: 'Earthquake', img: 'img/cookies/12.jpg' , price: 7.5 },
                {name: 'Roglc', img: 'img/cookies/13.jpg' , price: 9.25 },
                {name: 'Bear', img: 'img/cookies/14.jpg' , price: 9.5 }
                ];           



    $rootScope.counter = 0;
    $rootScope.selections = [];
    itemsInCart = JSON.parse(localStorage.getItem('items'));
    if (itemsInCart != null && itemsInCart.length > 0) {
        $rootScope.selections = itemsInCart;
        changeBadge();
    }

    function changeBadge() {
        if (($rootScope.counter = $rootScope.selections.length) == 0) {
            $('.badge').html('');
            $('#buyBtn').hide();
        }
        else $('.badge').html($rootScope.counter);
        localStorage.setItem('items', JSON.stringify($rootScope.selections));
    }

    $rootScope.pushSelection = function (o) {
        $rootScope.selections.push(o);
        changeBadge();
    }

    $rootScope.removeSelection = function (i) {
        $rootScope.selections.splice(i, 1);
        changeBadge();
    }

    $scope.setRoute = function (route) {
        $location.path(route);
    }


    angular.element(document).ready(function () {
        $scope.loadData();
    })
});

barisApp.controller('homeCtrl', function ($scope) {
    $scope.setRoute = function (route) {
        $location.path(route);
    }
});

barisApp.controller('cakesCtrl', function ($rootScope, $scope) {

    $scope.addToCart = function (a, b, c) {
        var o = { name: a, price: b, img: c };
        $rootScope.pushSelection(o);
    };

});

barisApp.controller('cookiesCtrl', function ($rootScope, $scope) {

    $scope.addToCart = function (a, b, c) {
        var o = { name: a, price: b, img: c };
        $rootScope.pushSelection(o);
    };

});

barisApp.controller('cartCtrl', function ($rootScope, $scope) {

    $scope.cartItems = JSON.parse(localStorage.getItem('items'));
    $scope.totalCost = 0;
    if ($scope.cartItems != null)
        for (i = 0; i < $scope.cartItems.length; i++)
            $scope.totalCost += $scope.cartItems[i].price;

    $scope.removeFromCart = function (item) {
        for (i = 0; i < $scope.cartItems.length; i++)
            if ($scope.cartItems[i].name == item) {
                $scope.totalCost -= $scope.cartItems[i].price;
                $rootScope.removeSelection(i);
                $scope.cartItems = $rootScope.selections;
                break;
            }

    };
});

barisApp.controller('contactusCtrl', function ($rootScope, $scope, $location, $http) {

    $scope.temp = false;
    $scope.name;
    $scope.email;
    $scope.subject;
    $scope.message;

    $scope.success = function () {
        $scope.temp = !$scope.temp;
        var data = "Name: " + $scope.name + "}E-mail: " + $scope.email + "}Subject: " + $scope.subject + "}Message: " + $scope.message;
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };
        $http.post("mail.aspx", 'A new message recieved:}'+data, config).success(function (data) {
        });
        $scope.setRoute('');
    };

});

barisApp.controller('registerCtrl', function ($rootScope, $scope, $location, $http) {
    
    $scope.first_name;
    $scope.last_name;
    $scope.email;
    $scope.phone;
    $scope.address;

    angular.element(document).ready(function () {

        $("input[type=submit]").prop("disabled", true);
        $("#first_name, #last_name, #email, #address, #phone").on("change paste keyup", function () {
            validate();
        });
    });

    function validate() {
        if ($('#first_name').val().length > 0 && $('#last_name').val().length > 0 && $('#email').is(':valid') > 0 && $('#address').val().length > 0 && $('#phone').is(':valid'))
            $("input[type=submit]").prop("disabled", false);
        else
            $("input[type=submit]").prop("disabled", true);
    }

    $scope.setRoute = function (route) {
        $location.path(route);
    }

    $scope.getOrder = function () {
        var tempCounter = $rootScope.counter, i = 0;
        var details = "Name: " + $scope.first_name + " " + $scope.last_name + ",e-mail: " + $scope.email + ",phone: " +
            $scope.phone + ",address: " + $scope.address + " }";
        var a = [];
        var b = $rootScope.selections;
        var temp;
        var totalSum = 0;
        for (j = 0 ; j < tempCounter ; j++) {
            temp = {name: b[j].name,  price: b[j].price};
            a.push(temp);
            totalSum += b[j].price;
        }
        var data = JSON.stringify(a);
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };
        $http.post("mail.aspx", details + 'Order: ' + data + "} Total Price: " + totalSum, config).success(function (data) {
        });
        $scope.setRoute('');
        while (i++ < tempCounter)
            $rootScope.removeSelection(0);
    }
});

