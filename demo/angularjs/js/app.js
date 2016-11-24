/**
 * Created by finally on 2016/10/21.
 */
var myApp = angular.module('myApp', ['ui.router', 'oc.lazyLoad']);
myApp.config(function ($stateProvider, $urlRouterProvider) {
	var _lazyLoad = function(loaded) {
		return function($ocLazyLoad) {
			return $ocLazyLoad.load(loaded, {
				serie: true
			});
		};
	};
	$urlRouterProvider.otherwise('/task1');
	$stateProvider
        .state('task1', {
            url:'/task1',
            templateUrl:'task1.html',
            resolve: {
                loadMyFile:_lazyLoad(
                    ['css/task1.css']
                )
            }
        })
		.state('task2', {
			url:'/task2',
			templateUrl:'task2.html',
			controller:'Task2',
			resolve: {
				loadMyFile:_lazyLoad(
					['js/task2.js', 'css/task2.css']
				)
			}
		})
		.state('task3', {
			url:'/task3',
			templateUrl:'task3.html',
			controller:'Task3',
			resolve: {
				loadMyFile:_lazyLoad(
					['js/task3.js', 'css/task3.css']
				)
			}
		})
		.state('task4', {
			url:'/task4',
			templateUrl:'task4.html',
			controller:'Task4',
			resolve: {
				loadMyFile:_lazyLoad(
					['js/task4.js', 'css/task4.css']
				)
			}
		})
		.state('task5', {
			url:'/task5',
			templateUrl:'task5.html',
			controller:'Task5',
			resolve: {
				loadMyFile:_lazyLoad(
					['js/task5.js', 'css/task5.css']
				)
			}
		})
		.state('task6', {
			url:'/task6',
			templateUrl:'task6.html',
			controller:'Task6',
			resolve: {
				loadMyFile:_lazyLoad(
					['js/task6.js', 'css/task6.css']
				)
			}
		})
		.state('task7', {
			url:'/task7',
			templateUrl:'task7.html',
			controller:'Task7',
			resolve: {
				loadMyFile:_lazyLoad(
					['js/task7.js', 'css/task7.css']
				)
			}
		})
		.state('task8', {
			url:'/task8',
			templateUrl:'task8.html',
			controller:'Task8',
			resolve: {
				loadMyFile:_lazyLoad(
					['js/task8.js', 'css/task8.css']
				)
			}
		})
		.state('task9', {
			url:'/task9',
			templateUrl:'task9.html',
			controller:'Task9',
			resolve: {
				loadMyFile:_lazyLoad(
					['js/task9.js', 'css/task9.css']
				)
			}
		})
		.state('task10', {
			url:'/task10',
			templateUrl:'task10.html',
			controller:'Task10',
			resolve: {
				loadMyFile:_lazyLoad(
					['js/task10.js', 'css/task10.css']
				)
			}
		})
});