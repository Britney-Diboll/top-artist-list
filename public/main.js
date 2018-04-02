const URL ="http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=d196b5b43027b5e3de5ed4de20c757b2&format=json"

angular 
  .module("mainApp", [])
  .controller("mainController", ["$scope", "$http", ($scope, $http) => {


    $http({
      method: "GET",
      url : URL,
    }).then(response => {
      console.log(response);
      $scope.data = response.data.artists.artist;
      console.log(response.data);
    })
    
  }])

  