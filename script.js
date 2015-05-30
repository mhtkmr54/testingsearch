angular.module('myApp', [])
.controller('MyController', function($scope){
  $scope.myData = {
    "SerialNumbers": {
        "451651": [
            {
                "Owner": "Mr Happy"
            }
        ],
        "5464565": [
            {
                "Owner": "Mr Red"
            }
        ],
        "45165": [
            {
                "Owner": "Mr Sad"
            }
        ],
        "4692": [
            {
                "Owner": "Mr Green"
            }
        ],
        "541": [
            {
                "Owner": "Mr Blue"
            }
        ],
        "D4554160N": [
            {
                "Owner": "Mr Loud"
            }
        ]
    }
  };
  $scope.results = [];
  
  $scope.findValue = function(enteredValue) {     
    angular.forEach($scope.myData.SerialNumbers, function(value, key) {
      if (key === enteredValue) {
        $scope.results.push({serial: key, owner: value[0].Owner});
      }
    });
  };

  
  
});