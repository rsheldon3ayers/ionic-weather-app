// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('weatherCtrl', function($http) {
  var weather = this;
  weather.placeholder = "http://placehold.it/350x150";
  weather.city = "--";
  weather.state = "--";


 
    var apiKey = '32da10273b3e8206'; 
    var url = "http://api.wunderground.com/api/32da10273b3e8206/conditions/forecast/geolookup/q/autoip.json"
    
    $http.get(url).then(function(res) {
      
      weather.temp = res.data.current_observation.temp_f;
      weather.placeholder = res.data.forecast.txt_forecast.forecastday[0].icon_url;
      weather.city = res.data.location.city;
      weather.state = res.data.location.state;
      console.log("object from wunderground", res.data.forecast, weather.placeholder);

    })
  

  weather.temp = "--"

  weather.search = function (term) {

    console.log(term);
    var url = "http://api.wunderground.com/api/32da10273b3e8206/conditions/forecast/geolookup/q/" + term + ".json";

    $http.get(url).then(function(res) {
      
      weather.temp = res.data.current_observation.temp_f;
      weather.placeholder = res.data.forecast.txt_forecast.forecastday[0].icon_url;
      weather.city = res.data.location.city;
      weather.state = res.data.location.state;
      console.log("object from wunderground", res.data.forecast, weather.placeholder, weather.city);

    })
  };
  
});
// .config(function ($stateProvider, $urlRouterProvider) {

//   $stateProvider.state("root",{
//     url: "/",
//     template: "<h1>Hello World</h1>"
//   })

//   // $urlRouterProvider.otherwise("/");
// });

