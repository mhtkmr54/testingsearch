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


  $scope.payees = [
                    {id:'1',name:'HouseRent', txnType:'EXPENDITURE'},
                    {id: '2', name:'InternetBill', txnType:'EXPENDITURE'}, 
                    {id:'3', name: 'PowerBill', txnType:'EXPENDITURE'}, 
                    {id:'4', name: 'Salary', txnType:'INCOME'}
                  ];

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
                    city:'Ahmadabad'
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
  
  $scope.findValue = function(enteredValue) {     
    angular.forEach($scope.myData.SerialNumbers, function(value, key) {
      if (key === enteredValue) {
        $scope.results.push({serial: key, owner: value[0].Owner});
      }
    });
  };

  
  
});