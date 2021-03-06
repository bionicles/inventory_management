console.log("Loading Clientside productController.js");

app.controller('productController', ['$scope', '$location', 'productFactory' function ($scope, $location, productFactory) {

  // Initialize Required Attributes
  $scope.product;

  // -------------------------------------------------------------------------
  //                            Add Required Methods
  // -------------------------------------------------------------------------
  productFactory.findProduct(id, function(returned_data){
    $scope.product = returned_data;
  });
}]);
