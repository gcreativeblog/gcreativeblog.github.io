var app = angular.module('gcreativeApp', ["ui.tinymce", "ngSanitize", "ngRoute"]);

app.controller('mainCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
    $.ajax({
        url: 'http://trapster.tk/articles/get/all/api123test567key0',
        method: 'get',
        dataType: 'json'
    }).done(function(data) {
        console.log(data);
    });
}]);

app.controller('articlesCtrl', ['$scope', '$routeParams', '$rootScope', function($scope, $routeParams, $rootScope) {
    
}]);
app.controller('articleController', ['$scope', '$routeParams', '$rootScope', function($scope, $routeParams, $rootScope) {
    console.log($routeParams);
    // setTimeout(function() {
    //     console.log($rootScope.data);
    // }, 5000);
}]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/articles.html',
            controller: 'articlesCtrl'
        })
        .when('/article/:articleSlug', {
            templateUrl: 'templates/article.html',
            controller: 'articleController'
        });
}]);