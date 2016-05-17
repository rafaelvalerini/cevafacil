angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout,  $location, $ionicPopup) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  //--------------------------------------------
   $scope.login = function(user) {
			
		if(typeof(user)=='undefined'){
			$scope.showAlert('Please fill username and password to proceed.');	
			return false;
		}

		if(user.username=='demo@gmail.com' && user.password=='demo'){
			$location.path('/app/dashboard');
		}else{
			$scope.showAlert('Invalid username or password.');	
		}
		
	};
  //--------------------------------------------
  $scope.logout = function() {   $location.path('/app/login');   };
  //--------------------------------------------
   // An alert dialog
	 $scope.showAlert = function(msg) {
	   var alertPopup = $ionicPopup.alert({
		 title: 'Warning Message',
		 template: msg
	   });
	 };
  //--------------------------------------------
})

.controller('TypesCtrl', function($scope, $stateParams , Profiles) {

	$scope.result = Profiles.get($stateParams.brand);	

	$scope.id = $stateParams.id;
	$scope.brand = $stateParams.brand;

	$scope.goBack = function(){
		window.history.go(-1);
	}
})


.controller('TypeHomeCtrl', function($scope, $stateParams , $window, Beer) {

	if($stateParams.id == 1){

		$scope.result = Beer.all();	

	}

	$scope.id = $stateParams.id;

	$window.navigator.geolocation.getCurrentPosition(function(position) {
  
    	$scope.$apply(function() {
  
      		window.localStorage['lat'] = position.coords.latitude;
  
      		window.localStorage['lng'] = position.coords.longitude;

    	})

  	})

  	if(!window.localStorage['lat']){
		window.localStorage['lat'] = -20.5477575;
	}

	
	if(!window.localStorage['lng']){
		window.localStorage['lng'] = -47.4189357;
	}

	$scope.goBack = function(){
		window.history.go(-1);
	}

})

.controller('ResultCtrl', function($scope, $ionicLoading, $ionicPopup, $stateParams, $http, Profiles, Meet) {
	
	$ionicLoading.show({
	    content: 'Carregando...',
		animation: 'fade-in',
		noBackdrop: false
	});

	$scope.id = $stateParams.id;

	$scope.size = $stateParams.size;

	$scope.brand = $stateParams.brand;

	$http.get('http://52.87.63.135:7001/type/'+$stateParams.id+'/brand/'+$stateParams.brand+'/size/'+$stateParams.size+'/lat/'+window.localStorage['lat']+'/lng/'+window.localStorage['lng'])
		
		.then(function(resp) {

	    $scope.results = resp.data;

	    if($scope.results){

	    	$scope.hasFirst = false;

	    	$scope.hasSecond = false;

	    	$scope.hasTree = false;

	    	var hoje=new Date();
			
			var dia= hoje.getDay();

	    	for (var i = $scope.results.length - 1; i >= 0; i--) {

	    		if(!$scope.results[i].Contract || $scope.results[i].Contract == 0){
	    			$scope.hasTree = true;
	    		}else if($scope.results[i].Contract == 1){
	    			$scope.hasFirst = true;
	    		}else if($scope.results[i].Contract == 2){
	    			$scope.hasSecond = true;
	    		}

	    		var initHour = 0;
	    		var finalHour = 0;

	    		if(dia == 0){
	    			initHour = parseInt($scope.results[i].Business.MondayIni.replace(":", ""));
	    			finalHour = parseInt($scope.results[i].Business.MondayFim.replace(":", ""));
	    		}else if(dia == 6){
	    			initHour = parseInt($scope.results[i].Business.SaturdayIni.replace(":", ""));
	    			finalHour = parseInt($scope.results[i].Business.SaturdayFim.replace(":", ""));
	    		}else{
	    			initHour = parseInt($scope.results[i].Business.BusinessDayIni.replace(":", ""));
	    			finalHour = parseInt($scope.results[i].Business.BusinessDayFim.replace(":", ""));
	    		} 

	    		var hourActual = hoje.getMinutes(); 
				
				hourActual += ""; 

				while (hourActual.length < 2) {
				    hourActual = "0" + hourActual;
				}

	    		var hourActualComplete = parseInt(hoje.getHours() + '' + hourActual);

	    		if(hourActualComplete >= initHour && hourActualComplete <= finalHour){
	    			$scope.results[i].OpenClose = 'Aberto';
	    		}else{
	    			$scope.results[i].OpenClose = 'Fechado';
	    		}

	    		if(!$scope.results[i].Type.Value || $scope.results[i].Type.Value == ''){
	    				$scope.results[i].Type.Value = 'Acabou';
	    		}
	    	}

		    window.localStorage['results'] = JSON.stringify(resp.data);

		    if($stateParams.id == 1){

		    	$scope.beerLogo = Profiles.get($stateParams.brand).sizes[0].logo;
		    	
		    }else{

		    	for (var i = Meet.get($stateParams.brand).types.length - 1; i >= 0; i--) {
		    		
		    		if(Meet.get($stateParams.brand).types[i].id == $stateParams.size){

		    			$scope.beerLogo = Meet.get($stateParams.brand).types[i].logo;

		    			break;

		    		}
		    		
		    	}

		    }

		    $ionicLoading.hide();

		}else {

			$ionicLoading.hide();

			$ionicPopup.alert({
		       title: 'Nenhum estabelecimento encontrado',
		       template: 'Não encontramos nenhum estabelecimento vendendo esta cerveja. Clique no botão voltar e selecione outra cerveja.'
		    });
     
		}

	}, function(err) {

		$ionicLoading.hide();

		$ionicPopup.alert({
		       title: 'Desculpe pelo transtorno',
		       template: 'Clique no botão voltar e tente novamente!' + err.message
		    });

	    console.error('ERR', err);

	})

	$scope.goBack = function(){
		window.history.go(-1);
	}

})

.controller('CupomCtrl', function($scope, $location, $http, $ionicLoading, $ionicPopup) {
  
  	$ionicLoading.show({
	    template: '<i class="icon ion-loading-d" style="font-size: 32px"></i>',
		animation: 'fade-in',
		noBackdrop: false
	});

  	$http.get('http://52.87.63.135:7001/cupons').then(function(resp) {

		    if(!resp.data){

	  			$ionicLoading.hide();

	  			$ionicPopup.alert({
			       title: 'Cupom',
			       template: 'Infelizmente não encontramos nenhum cupom.'
			    });

	  		}else{

	  			$ionicLoading.hide();

	  			$scope.cupons = resp.data;

	  			console.log(resp.data);

	  		}

		}, function(err) {

			$ionicLoading.hide();

			$ionicPopup.alert({
			       title: 'Erro inesperado',
			       template: 'Falha ao consultar cupons.'
			    });

		    console.error('ERR', err);

		})

	$scope.goBack = function(){
		window.history.go(-1);
	}

})

.controller('DashBoardCtrl', function($scope, $ionicLoading, $stateParams, $http, Profiles, Meet) {
	
	$ionicLoading.show({
	    content: 'Carregando...',
		animation: 'fade-in',
		noBackdrop: false
	});

	var post = JSON.parse(window.localStorage['results'] || '[{}]');

	var i = 0;

	for (i = 0; i < post.length; i++) {
		
		if (post[i].Id == $stateParams.company) {
			
			$scope.result = post[i];

			 if($stateParams.id == 1){

		    	$scope.beerLogo = Profiles.get($stateParams.brand).sizes[0].logo;
		    	
		    }else{

		    	var lengthBranch = Meet.get($stateParams.brand).types.length
		    	
		    	for (var j = 0; j < lengthBranch; j++) {
		    	
		    		if(Meet.get($stateParams.brand).types[j].id == $stateParams.size){

		    			$scope.beerLogo = Meet.get($stateParams.brand).types[j].logo;

		    			break;

		    		}
		    		
		    	}

		    }

			$http.post('http://52.87.63.135:7001/company/'+$stateParams.company+
				'/show/lat/'+window.localStorage['lat']+
				'/lng/'+window.localStorage['lng'] + '/token/'+
				Base64.encode('' + new Date().getTime()))
		
				.then(function(resp) {

			    $scope.ok = resp.data;

			}, function(err) {

			    console.error('ERR', err);

			})

		}

	}

	$scope.id = $stateParams.id;

	$scope.brand = $stateParams.brand;
	
	$scope.size = $stateParams.size;

	$ionicLoading.hide();

	$scope.goBack = function(){
		window.history.go(-1);
	}

  	$scope.newTask = function() {
    
    	window.open('http://maps.google.com?q='+$scope.result.Lat+','+$scope.result.Lng,'_system');
  	
  	};

})


.controller('HomeCtrl', function($scope, $window) {
  
  	$window.navigator.geolocation.getCurrentPosition(function(position) {
  
    	$scope.$apply(function() {
  
      		window.localStorage['lat'] = position.coords.latitude;
  
      		window.localStorage['lng'] = position.coords.longitude;

    	})

  	})

  	if(!window.localStorage['lat']){
		window.localStorage['lat'] = -20.5477575;
	}

	
	if(!window.localStorage['lat']){
		window.localStorage['lat'] = -20.5477575;
	}
})


.controller('TypesMeetCtrl', function($scope, $ionicLoading, $stateParams, Meet) {
  
  	$ionicLoading.show({
	    template: '<i class="icon ion-loading-d" style="font-size: 32px"></i>',
		animation: 'fade-in',
		noBackdrop: false
	});

	var post = JSON.parse(window.localStorage['results'] || '[{}]');

	$scope.types = Meet.get($stateParams.id);

	$scope.id = $stateParams.id;

	$ionicLoading.hide();

	$scope.goBack = function(){
		window.history.go(-1);
	}

})

.controller('HomeMeetCtrl', function($scope, $ionicLoading, Meet) {
  
  	$ionicLoading.show({
	    template: '<i class="icon ion-loading-d" style="font-size: 32px"></i>',
		animation: 'fade-in',
		noBackdrop: false
	});

	$ionicLoading.hide();

	$scope.goBack = function(){
		window.history.go(-1);
	}

});


