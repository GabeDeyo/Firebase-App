var app = angular.module("sampleApp", ["firebase"]);

  // Initialize Firebase
  app.config(function() {
  var config = {
    apiKey: "AIzaSyCE1TKtqzQH51ez7yx_c-WoGzZYd20wNMw",               // Your Firebase API key
    authDomain: "fbtesting-66cac.firebaseapp.com",       // Your Firebase Auth domain ("*.firebaseapp.com")
    databaseURL: "https://fbtesting-66cac.firebaseio.com",     // Your Firebase Database URL ("https://*.firebaseio.com")
    storageBucket: "fbtesting-66cac.appspot.com"  // Your Firebase Storage bucket ("*.appspot.com")
  };
  firebase.initializeApp(config);
});

//Object Controller
app.controller("mainController", ['$scope', '$firebaseObject', function($scope, $firebaseObject) {

    // Get a reference to the database service
    var database = firebase.database();

    $scope.days = $firebaseObject(firebase.database().ref('days/'));
    
    $firebaseObject(firebase.database().ref('days/')).$bindTo($scope, 'days');

    $scope.reset = function(){
        firebase.database().ref('days/').set({
            monday:{
                name: 'Monday',
                slots: {
                    72:{
                        time: '11:00am',
                        booked: false
                    },
                    100:{
                        time: '1:00pm',
                        booked: false
                    },
                    300:{
                        time: '3:00pm',
                        booked: false
                    },
                    500:{
                        time: '5:00pm',
                        booked: false
                    },
                    700:{
                        time: '7:00pm',
                        booked: false
                    },
                    900:{
                        time: '9:00pm',
                        booked: false
                    }
                }
            },
            tuesday:{
                name: 'Tuesday',
                slots: {
                    72:{
                        time: '11:00am',
                        booked: false
                    },
                    100:{
                        time: '1:00pm',
                        booked: false
                    },
                    300:{
                        time: '3:00pm',
                        booked: false
                    },
                    500:{
                        time: '5:00pm',
                        booked: false
                    },
                    700:{
                        time: '7:00pm',
                        booked: false
                    },
                    900:{
                        time: '9:00pm',
                        booked: false
                    }
                }
            },
            wednesday:{
                name: 'Wednesday',
                slots: {
                    72:{
                        time: '11:00am',
                        booked: false
                    },
                    100:{
                        time: '1:00pm',
                        booked: false
                    },
                    300:{
                        time: '3:00pm',
                        booked: false
                    },
                    500:{
                        time: '5:00pm',
                        booked: false
                    },
                    700:{
                        time: '7:00pm',
                        booked: false
                    },
                    900:{
                        time: '9:00pm',
                        booked: false
                    }
                }
            }
        }); 
    }
}]);