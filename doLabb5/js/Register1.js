var module = angular.module("powah",[]);
var a = 12;

module.controller("regisrCtrl", function($scope, $rootScope) {
    
    $scope.cancel = function(){
        $rootScope.student = angular.copy($rootScope.students[$rootScope.index]);
        $rootscope.student = {};
    };
                  
    $scope.save = function(){
        $rootScope.students[$rootScope.index] = angular.copy($rootScope.student);
    };

    $scope.delete = function(){
        

        if($rootScope.students.length != 0){
            $rootScope.student = $rootScope.students[$rootScope.students.length];
        }else{
            $rootScope.student = {};
        }        

        $rootScope.students.splice($rootScope.index,  $rootScope.index + 1 );
        console.log($rootScope.index);
    };

    $scope.insert = function(){
        $rootScope.students.push($rootScope.student);
    };

});



module.controller("listCtrl", function($scope, $rootScope) {
    $rootScope.students = [
        {
            "fullName": "Hà Huy Trí",
            "birthDay": "10/06/2003",
            "mark": 10
        },
        {
            "fullName": "Bùi Thị Kim Trang",
            "birthDay": "22/05/2002",
            "mark": 9.5
        },
        {
            "fullName": "Vũ Ngọc Hoài Ân",
            "birthDay": "01/01/2023",
            "mark": 7
        }
    ];

    $rootScope.index = -1;

    $rootScope.student = {};

    $scope.edit = function(index) {
        $rootScope.index = index;
        $rootScope.student = angular.copy($rootScope.students[index]);
    }

});



    
