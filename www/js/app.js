// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers' , 'starter.services'])

.run(function($ionicPlatform , $rootScope, $timeout, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

     $rootScope.authStatus = false;
     //stateChange event
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){

      $rootScope.authStatus = toState.authStatus;
      if($rootScope.authStatus){
        
      
      }
    });

  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    if(toState.url=='/dashboard'){
      $timeout(function(){
        angular.element(document.querySelector('#leftMenu' )).removeClass("hide");
      },1000);
    } 
  });

})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

//--------------------------------------

 .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-signin.html',
        controller: 'HomeCtrl'
      }
    },
  authStatus: false
  })
//--------------------------------------


    .state('app.profiles', {
      url: '/profiles',
      views: {
        'menuContent': {
          templateUrl: 'templates/profiles.html',
          controller: 'ProfilesCtrl'
        }
      }
    })

    .state('app.cupons', {
      url: '/cupons',
      views: {
        'menuContent': {
          templateUrl: 'templates/cupom.html',
          controller: 'CupomCtrl'
        }
      }
    })

    .state('app.meet', {
      url: '/meet',
      views: {
        'menuContent': {
          templateUrl: 'templates/home_meet.html',
          controller: 'HomeMeetCtrl'
        }
      }
    })

      .state('app.typesmeet', {
      url: '/meet/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/types_meet.html',
          controller: 'TypesMeetCtrl'
        }
      }
    })

    .state('app.type', {
      url: '/type/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'TypeHomeCtrl'
        }
      }
    })

    .state('app.types', {
      url: '/type/:id/brand/:brand',
      views: {
        'menuContent': {
          templateUrl: 'templates/types.html',
          controller: 'TypesCtrl'
        }
      }
    })
    
    .state('app.result', {
      url: '/type/:id/brand/:brand/size/:size',
      views: {
        'menuContent': {
          templateUrl: 'templates/result.html',
          controller: 'ResultCtrl'
        }
      }
    })

    .state('app.show', {
      url: '/type/:id/brand/:brand/size/:size/company/:company',
      views: {
        'menuContent': {
          templateUrl: 'templates/dashboard.html',
          controller: 'DashBoardCtrl'
        }
      }
    })

  .state('app.profile', {
    url: '/profile/:profileId',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile-detail.html',
        controller: 'ProfileCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});