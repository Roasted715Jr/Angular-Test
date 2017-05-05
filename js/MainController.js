/* Do this in Git Bash
$ npm install -g firebase-tools
$ firebase init    # Generate a firebase.json (REQUIRED)
$ firebase serve   # Start development server
*/

var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = firebase.database().ref();
  // download the data into a local object
  $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work, see below
});