app.controller("moviesCtrl",["$scope","$http", function($scope,$http){
    
    //calling home service data
    $http.get("data/movies/telugu.json").then(function(responce){
        $scope.moviesInfo = responce.data;
    })
    $http.get("data/movies/hindi.json").then(function(responce){
        $scope.hindiMoviesInfo = responce.data;
    })
    $scope.genresInfo = ["Action","Thriller","Drama"];
}])