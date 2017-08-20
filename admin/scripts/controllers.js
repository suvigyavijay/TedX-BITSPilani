'use strict';

var globalVar;
var token;

angular.module('adminApp')
    .controller('MainController', ['$rootScope', '$location', '$state', function($rootScope, $location, $state) {
        
		$rootScope.title = "Feedbacks";
		$rootScope.loggedIn = false;
		if (!$rootScope.loggedIn)
			$location.path('/');
		$rootScope.stateCheck = function(selected) {
			if ($state.current.url==selected){
				return true;
			}
			else {
				return false;
			}
		}

    }])

    .controller('LoginController', ['$rootScope', '$scope', '$state', function($rootScope, $scope, $state) {
        
        $scope.userLogin = {
			username: "",
			password: ""
		}
		
		$scope.login = function() {
		firebase.auth().signInWithEmailAndPassword($scope.userLogin.username, $scope.userLogin.password)
			.then(function(){
				$rootScope.loggedIn = true;
				$state.go('app.dashboard');
				$rootScope.title = "Dashboard";
				$.notify({
					icon: 'pe-7s-power',
					message: "Login Successful"
				},{
					type: 'success',
					timer: 3000
				});
			}).catch(function(error) {
			console.log(error);
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
			$.notify({
					icon: 'pe-7s-refresh-2',
					message: error.message
				},{
					type: 'danger',
					timer: 3000
				});
		});
		}
		
		$scope.logout = function() {
			firebase.auth().signOut().then(function() {
				$rootScope.title = "Login";
  				$.notify({
					icon: 'pe-7s-power',
					message: "Logout Successful"
				},{
					type: 'info',
					timer: 3000
				});
			}, function(error) {
  				$.notify({
					icon: 'pe-7s-power',
					message: "Some error occured. Please try again"
				},{
					type: 'warning',
					timer: 3000
				});
			});
		}
    }])
        
    .controller('FeedbackController', ['$rootScope', '$scope', '$state', function($rootScope, $scope, $state) {
        
		$scope.feedbacks = [];
		
		var databaseRef = firebase.database().ref('/');
		databaseRef.once('value', function(snapshot) {
		  snapshot.forEach(function(childSnapshot) {
			var childKey = childSnapshot.key;
			var childData = childSnapshot.val();
			  childData.Message = childData.Message.replace(/\n/g, "<br />");
			$scope.feedbacks.push({
				date: new Date(Date.parse(childKey)).toString(),
				data: childData
			})
			$scope.feedbacks.sort(function(a, b) {
				return new Date(b.date) - new Date(a.date);
			})
		  });
		$scope.$apply();
		});
        
    }])
        
;
