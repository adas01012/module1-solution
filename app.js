(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope)
{
  $scope.lunchList="";
  $scope.message ="";

  function checkListLength(listString)
  {
      return listString.split(',').length;
  };

  function displayMessage(message)
  {
      $scope.message = message;
  };


$scope.checkIfTooMuch = function () {

if ($scope.lunchList.length == 0)
{
  displayMessage("Please enter data first");
}
else
{
  if (checkListLength($scope.lunchList) <= 3)
  {
    displayMessage("Enjoy!");
  }
  else if (checkListLength($scope.lunchList) > 3)
  {
    displayMessage("To much!")
  }
};
};
};
})();
