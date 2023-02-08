var app = angular.module("app",[]);

app.controller("infoCtrl", function($scope)
{
    $scope.fullName = "Hà Huy Trí";
    $scope.birthDay = "10/06/2003";
    $scope.avgMark = 6.2;
    $scope.gender = "Nam";
});

app.controller("infoCtrl2", function($scope)
{
    $scope.student = {
        "fullName": "Hà Huy Trí",
        "birthDay": "10/06/2003",
        "avgMark": 8,
        "gender": "Nam",
    }
});

app.controller("infoCtrl3", function($scope)
{
    $scope.students = [
    {
        "img": "avatar.jpg",
        "fullName": "Hà Huy Trí",
        "birthDay": "10/06/2003",
        "avgMark": 8,
        "gender": "Nam",
    },
    {
        "img": "avatar.jpg",
        "fullName": "Hà Huy Đức",
        "birthDay": "10/06/1987",
        "avgMark": 6,
        "gender": "Nam",
    },
    {
        "img": "avatar.jpg",
        "fullName": "Nguyễn Văn Hoài",
        "birthDay": "10/06/2002",
        "avgMark": 10,
        "gender": "Nữ",
    }
]
});

app.filter("status", function(){
    return function(input){
        if(input == "Nam"){
            return true;
        }else{
            return false;
        }
    }
});

app.controller("calcu", function($scope)
{
    $scope.tinh = function(length, width) {
        $scope.$parent.P = (length + width) * 2;
        $scope.$parent.S = length * width;
    }


});


app.controller("infoCtrl4", function($scope)
{
    $scope.students = [
        {
            "img": "avatar.jpg",
            "fullName": "Hà Huy Trí",
            "birthDay": "10/06/2003",
            "avgMark": 8,
            "gender": "Nam",
        },
        {
            "img": "avatar.jpg",
            "fullName": "Hà Huy Đức",
            "birthDay": "10/06/1987",
            "avgMark": 6,
            "gender": "Nam",
        },
        {
            "img": "avatar.jpg",
            "fullName": "Nguyễn Văn Hoài",
            "birthDay": "10/06/2002",
            "avgMark": 10,
            "gender": "Nữ",
        },
    ]

    $filter.type = function(a){
        if(a <= 5){
            return avgMark > 5;
        }else{
            return avgMark < 5;
        }
    }
});



