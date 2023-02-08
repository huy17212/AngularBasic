var module = angular.module("powah",[]);
var a = 12;

module.controller("regisrCtrl", function($scope) {
    
    $scope.cancel = function(){
        $scope.$parent.student = angular.copy($scope.$parent.students[$scope.$parent.index]);
        $scope.$parent.student = {};
    };
                  
    $scope.save = function(){
        $scope.$parent.students[$scope.$parent.index] = angular.copy($scope.$parent.student);
    };

    $scope.delete = function(){
        

        if($scope.$parent.students.length != 0){
            $scope.$parent.student = $scope.$parent.students[$scope.$parent.students.length];
        }else{
            $scope.$parent.student = {};
        }        

        $scope.$parent.students.splice($scope.$parent.index,  $scope.$parent.index + 1 );
        console.log($scope.$parent.index);
    };

    $scope.insert = function(){
        $scope.$parent.students.push($scope.$parent.student);
    };

});



module.controller("listCtrl", function($scope) {
    $scope.$parent.students = [
        {
            "fullName": "Hà Huy Trí",
            "birthDay": "10/06/2003",
            "mark": 10,
            "numPhone": "0979993593",
            "gender": true
        },
        {
            "fullName": "Bùi Thị Kim Trang",
            "birthDay": "22/05/2002",
            "mark": 9.5,
            "numPhone": "0979993593",
            "gender": false
        },
        {
            "fullName": "Vũ Ngọc Hoài Ân",
            "birthDay": "01/01/2023",
            "mark": 7,
            "numPhone": "0979993593",
            "gender": false
        }
    ];

    $scope.$parent.index = -1;

    $scope.$parent.student = {};

    $scope.edit = function(index) {
        $scope.$parent.index = index;
        $scope.$parent.student = angular.copy($scope.$parent.students[index]);
    }



});


module.filter("gender",function(){
    return function(x){
        if(x === true){
            return "Nam"
        }else{
            return "Nữ"
        }
    }
});


    
