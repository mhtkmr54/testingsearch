var myApp = angular.module('myApp', []);
myApp.controller('MyController', function($scope, ngDialog){



                     $scope.openContactForm = function() {
                    ngDialog.openConfirm({template: 'contact_us.html',
                    scope: $scope //Pass the scope object if you need to access in the template
                    }).then(
                    function(value) {
                    //save the contact form
                    },
                    function(value) {
                    //Cancel or do nothing
                    }
                    );
                    }; 






   
     var weather  =   { 
                        location:'Hyderabad Airport, India (VOHY) 17-27N 078-28E 545M',
                       time:'May 30, 2015 - 12:40 PM EDT / 2015.05.30 1640 UTC',
                       wind:' from the S (180 degrees) at 5 MPH (4 KT):0',
                       visibility:' 3 mile(s):0',
                       skyconditions:' partly cloudy',
                       temperature:' 91 F (33 C)',
                       dewpoint:' 55 F (13 C)',
                       relativehumidity:' 29%',
                       pressure:' 29.80 in. Hg (1009 hPa)',
                       status:'Success'
                     };
                    
                  

  $scope.dataset = [
              {
                    country:'Russia',
                    city:'Moscow'
                },

                 
      
                {
                    country:'British Indian Ocean Territory',
                    city:'Diego Garcia'
                },
                {
                    country:'India',
                    city:'Hyderabad'
                    

                },
                {
                    country:'India',
                    city:'Akola'
                },
                {
                    country:'India',
                    city:'Aurangabad Chikalthan Aerodrome'
                },
                {
                    country:'India',
                    city:'Bombay / Santacruz'
                },
                {
                    country:'India',
                    city:'Bilaspur'
                },
                {
                    country:'India',
                    city:'Bhuj-Rudramata'
                },
                {
                    country:'India',
                    city:'Belgaum / Sambra'
                },
                {
                    country:'India',
                    city:'Bhopal / Bairagarh'
                },
                {
                    country:'India',
                    city:'Bhaunagar'
                },
                {
                    country:'India',
                    city:'Goa / Dabolim Airport'
                },
                {
                    country:'India',
                    city:'Indore'
                },
                {
                    country:'India',
                    city:'Jabalpur'
                },
                {
                    country:'India',
                    city:'Khandwa'
                },
                {
                    country:'India',
                    city:'Kolhapur'
                },
                {
                    country:'India',
                    city:'Nagpur Sonegaon'
                },
                {
                    country:'India',
                    city:'Rajkot'
                },
                {
                    country:'India',
                    city:'Sholapur'
                },
                {
                    country:'India',
                    city:'Agartala'
                },
                {
                    country:'India',
                    city:'Siliguri'
                },
                {
                    country:'India',
                    city:'Bhubaneswar'
                },
                {
                    country:'India',
                    city:'Calcutta / Dum Dum'
                },
                {
                    country:'India',
                    city:'Car Nicobar'
                },
                {
                    country:'India',
                    city:'Gorakhpur'
                },
                {
                    country:'India',
                    city:'Gauhati'
                },
                {
                    country:'India',
                    city:'Gaya'
                },
                {
                    country:'India',
                    city:'Imphal Tulihal'
                },
                {
                    country:'India',
                    city:'Jharsuguda'
                },
                {
                    country:'India',
                    city:'Jamshedpur'
                },
                {
                    country:'India',
                    city:'North Lakhimpur'
                },
                {
                    country:'India',
                    city:'Dibrugarh / Mohanbari'
                },
                {
                    country:'India',
                    city:'Port Blair'
                },
                {
                    country:'India',
                    city:'Patna'
                },
                {
                    country:'India',
                    city:'M. O. Ranchi'
                },
                {
                    country:'India',
                    city:'Agra'
                },
                {
                    country:'India',
                    city:'Allahabad / Bamhrauli'
                },
                {
                    country:'India',
                    city:'Amritsar'
                },
                {
                    country:'India',
                    city:'Varanasi / Babatpur'
                },
                {
                    country:'India',
                    city:'Bareilly'
                },
                {
                    country:'India',
                    city:'Kanpur / Chakeri'
                },
                {
                    country:'India',
                    city:'New Delhi / Safdarjung'
                },
                {
                    country:'India',
                    city:'New Delhi / Palam'
                },
                {
                    country:'India',
                    city:'Gwalior'
                },
                {
                    country:'India',
                    city:'Hissar'
                },
                {
                    country:'India',
                    city:'Jhansi'
                },
                {
                    country:'India',
                    city:'Jodhpur'
                },
                {
                    country:'India',
                    city:'Jaipur / Sanganer'
                },
                {
                    country:'India',
                    city:'Kota Aerodrome'
                },
                {
                    country:'India',
                    city:'Lucknow / Amausi'
                },
                {
                    country:'India',
                    city:'Satna'
                },
                {
                    country:'India',
                    city:'Udaipur Dabok'
                },
                {
                    country:'India',
                    city:'Bellary'
                },
                {
                    country:'India',
                    city:'Vijayawada / Gannavaram'
                },
                {
                    country:'India',
                    city:'Coimbatore / Peelamedu'
                },
                {
                    country:'India',
                    city:'Cochin / Willingdon'
                },
                {
                    country:'India',
                    city:'Cuddapah'
                },
                {
                    country:'India',
                    city:'Hyderabad Airport'
                },
                {
                    country:'India',
                    city:'Madurai'
                },
                {
                    country:'India',
                    city:'Mangalore / Bajpe'
                },
                {
                    country:'India',
                    city:'Madras / Minambakkam'
                },
                {
                    country:'India',
                    city:'Tiruchchirapalli'
                },
                {
                    country:'India',
                    city:'Thiruvananthapuram'
                },
                {
                    country:'India',
                    city:'Vellore'
                }

  ];

  
  $scope.results = [];

  $scope.weatherpt=function () {

    var output = '';
    for (var entry in weather) {
    output += 'key: ' + entry + ' | value: ' + weather[entry] + '\n';
    }
    alert(output);

  
      };


  $scope.findValue = function(enteredValue) {     
    angular.forEach($scope.myData.SerialNumbers, function(value, key) {
      if (key === enteredValue) {
        $scope.results.push({serial: key, owner: value[0].Owner});
      }
    });
  };
 

  
  
});

myApp.directive('modal', function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ title }}</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });