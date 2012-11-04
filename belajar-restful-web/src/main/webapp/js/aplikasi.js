/*
 * Copyright (C) 2011 ArtiVisi Intermedia <info@artivisi.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var modul = angular.module('belajar', ['ngResource'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {templateUrl: 'pages/home.html'})
            .when('/system/config', {templateUrl: 'pages/system/config.html', controller: 'ApplicationConfigController'})
            .when('/about', {templateUrl: 'pages/about.html', controller: 'AboutController'})
            .otherwise({templateUrl: 'pages/404.html'});
    }]);

modul.factory('ApplicationConfigService', function($resource){
    return $resource('/config/:configId', {}, {
        findAll: {method: 'GET', isArray: true}
    });
});

modul.controller('AboutController', function($scope){
    $scope.appName = "Aplikasi Belajar";
    $scope.appVersion = "Versi 1.0.0";
});

modul.controller('ApplicationConfigController', function($scope, ApplicationConfigService){
    $scope.configs = ApplicationConfigService.findAll();
    
    $scope.edit = function(x){
        $scope.currentConfig = x;
    };
    
});

