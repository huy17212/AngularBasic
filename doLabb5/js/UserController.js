

var powah = angular.module(
    "powah",
    []
);


powah.controller("UserInfo", function ($scope) {
    $scope.info = [
        {
            "fullName": "Trần Tiến Nam",
            "birthDay": "09/07/2010",
            "gender": true,
            "avgMark": 8.4
        },
        {
            "fullName": "Trần Thị Thanh Tâm",
            "birthDay": "13/07/2015",
            "gender": false,
            "avgMark": 8
        }
    ];

    $scope.demo = 123;
});