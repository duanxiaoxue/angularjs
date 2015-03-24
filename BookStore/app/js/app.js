var bookStoreApp = angular.module('bookStoreApp', [
    'ngRoute', 'ngAnimate', 'bookStoreCtrls', 'bookStoreFilters',
    'bookStoreServices', 'bookStoreDirectives','authorCtrls',
]);

bookStoreApp.config(function($routeProvider) {
    $routeProvider.when('/hello', {
        templateUrl: 'tpls/hello.html',
        controller: 'HelloCtrl'
    }).when('/list',{
        templateUrl:'tpls/bookList.html',
        controller:'BookListCtrl'
    }).when('/author',{
        templateUrl:'tpls/authordec.html',
        controller:'AuthorDescCtrl'
    }).when('/authorlist',{
        templateUrl:'tpls/authorList.html',
        controller:'AuthorListCtrl'
    }).otherwise({
        redirectTo: '/hello'
    })
});
