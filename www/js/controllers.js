angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
.controller('login_Ctrl', function($scope,$state,$ionicPopup){
  
  $scope.alertmsg=function(msg){
    var alertpopup=$ionicPopup.alert({
      title:'LOGIN',
      template: 'PLEASE CLICK OK TO CONTINUE',
  
  })
  }
  $scope.add=[];
    $scope.sign=function(){
      window.localStorage['user']=$scope.add.name;
      window.localStorage['psw']=$scope.add.pasw;
    $scope.username=window.localStorage['user'];
    $scope.password1=window.localStorage['psw'];
    console.log('User');
    console.log($scope.username);
    console.log('pswd');
    console.log($scope.password1);
  
      if($scope.username=="caiser" && $scope.password1=="caiser@1234" ){
  
        alert('ok');
        $state.go('app.current');
      }
     else if(($scope.username=="undefined" || $scope.password1=="undefined" ) || ($scope.username=="" || $scope.password1=="" ) ){
  
        
        alert('Please fill the Fields');
  
      }
      
      
      else {
       
        alert('Invalid credentials');
      }
   
    }

})
.controller('searchCtrl', function($scope, $state){
  $scope.display="SUNNY";
  $scope.current=function(){
    $state.go('app.current')
    location.reload();
            
  }
  $scope.weekly=function(){
    $state.go('app.welcome');
    location.reload();
  }

})

.controller('currentCtrl', function($scope, $state, $http){
  $scope.status="1";
  if($scope.status=="1"){
  $scope.icon="ios-sunny"
  $scope.color="orange";
  $scope.text="SUNNY";
  }
  if($scope.status=="0"){
    $scope.icon="ios-cloud"
    $scope.color="grey";
    $scope.text="CLOUDY";
    }
  
  $scope.items = [];
  $scope.viewdata=function(){
    $http.get('http://219.90.67.70:5000/caiser/Caiser_staff/la_climate/rest/view_data')
    .success(function(data){
      $scope.viewdata4 = data;
      console.log( $scope.viewdata4);

    })
  }
  $scope.viewdata();




})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
