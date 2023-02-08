var module = angular.module("powah", []);

// bai1
module.controller("infoCtrl", function ($scope) {
    $scope.fullName = "";
    $scope.salary = "";

    $scope.$parent.kq = "";

    $scope.$parent.ham = function (salary, gender, age) {

        var ten = document.getElementById("fullName");
        var luong = document.getElementById("salary");

        if ($scope.salary === null || $scope.salary === "") {
            luong.style.border = "1px solid red";
            luong = false;
        } else {
            luong.style.border = "1px solid gray";
            luong = true;
        }

        if ($scope.fullName === null || $scope.fullName === "") {
            ten.style.border = "1px solid red";
            ten = false;
        } else {
            ten.style.border = "1px solid gray";
            ten = true;
        }

        if (ten == true && luong == true) {
            age = age == 60 ? 1.5 : (age == 40 ? 1 : 0.7);

            gender = gender == "Female" ? 200 : 0;

            var last = Math.ceil(salary * age + gender);
            $scope.$parent.kq = isNaN(last) ? 0 : Math.ceil(salary * age + gender);
            return "";
        }

        ten = ten == false ? "Họ tên" : "";
        luong = luong == false ? " và Lương" : "";
        $scope.$parent.kq = "Thiếu các trường sau: " + ten + luong;
        return "";
    }
});

module.directive("showValue", function () {
    return {
        restrict: "E",
        template: "<p class='Show-value'>Error: {{kq}} </p>"
    };
});


// bai2

module.controller("infoCtr2", function ($scope) {

    $scope.cart = [
        {
            "nameProduct": "Nước ngọt",
            "amount": 0,
            "price": 100000,
            "bill": 0,
        },
        {
            "nameProduct": "Caffe đen",
            "amount": 0,
            "price": 120000,
            "bill": 0,
        },
        {
            "nameProduct": "Thuốc Ngoại",
            "amount": 0,
            "price": 180000,
            "bill": 0,
        },
        {
            "nameProduct": "Thuốc Nội",
            "amount": 0,
            "price": 180000,
            "bill": 0,
        },
        {
            "nameProduct": "Thuốc Lào",
            "amount": 0,
            "price": 180000,
            "bill": 0,
        },
    ];

    $scope.amount = 0;
    $scope.index = -1;
    $scope.dtMau = {};

    $scope.Open = function (index, status) {
        var a = document.getElementById("amount" + index);
        var status = a.getAttribute("disabled");

        if (status == "") {
            a.disabled = false;
        } else if (status == null) {
            a.disabled = true;
        }

        $scope.index = index;
    }


    $scope.tinh = function (amount, index) {
        $scope.dtMau = $scope.cart[index];
        $scope.dtMau.amount = amount;
        $scope.dtMau.bill = $scope.dtMau.amount * $scope.dtMau.price;
    }

    $scope.$parent.finallly = function () 
    {
        var fin = 0;
        for (let x of $scope.cart) {
            fin += x.bill
        }
        return fin;
    }
});

module.directive("showUpKq", function () {
    return {
        restrict: "E",
        template: "<p class='show-Up-Kq'> {{finallly()}} </p>"
    };
});



var app = angular.module('myApp', ['ui.bootstrap']);
  app.controller('ListController', function ($scope) {
      $scope.curPage = 1,
          $scope.itemsPerPage = 3,
          $scope.maxSize = 5;
 
      this.items = itemsDetails;
 
      $scope.numOfPages = function () {
          return Math.ceil(itemsDetails.length / $scope.itemsPerPage);
 
      };
 
      $scope.$watch('curPage + numPerPage', function () {
          var begin = (($scope.curPage - 1) * $scope.itemsPerPage),
              end = begin + $scope.itemsPerPage;
 
          $scope.filteredItems = itemsDetails.slice(begin, end);
      });
  });
 
  var itemsDetails = [
      {
          courseCode: 1001,
          courseName: 'Web Technology',
          courseDescription: 'HTML, CSS, AngularJS',
          noc: '10',
          available: 'YES',
          totm: 200,
          passm: 75,
          soc: 'Active'
      },
      {
          courseCode: 1002,
          courseName: 'Software Technology',
          courseDescription:
              'Alpha testing, Beta testing, Integration testing, Black box testing',
          noc: '10',
          available: 'YES',
          totm: 100,
          passm: 45,
          soc: 'Active'
      },
      {
          courseCode: 1003,
          courseName: 'Theory Of Computation',
          courseDescription: 'FSM, PDA, TM',
          noc: '100',
          available: 'NO',
          totm: 100,
          passm: 45,
          soc: 'Inactive'
      },
      {
          courseCode: 1004,
          courseName: 'Algorithm',
          courseDescription:
              'Greedy algorithms, Dynamic Programming, Sorting',
          noc: '6',
          available: 'YES',
          totm: 200,
          passm: 75,
          soc: 'Active'
      },
      {
          courseCode: 1005,
          courseName: 'Networking',
          courseDescription: 'IP',
          noc: '12',
          available: 'YES',
          totm: 50,
          passm: 19,
          soc: 'Active'
      },
      {
          courseCode: 1006,
          courseName: 'Database',
          courseDescription: 'Indexing, B and B+ trees, SQL',
          noc: '24',
          available: 'NO',
          totm: 200,
          passm: 75,
          soc: 'Inactive'
      },
      {
          courseCode: 1007,
          courseName: 'Programming',
          courseDescription: 'C, C++, JAVA, Python',
          noc: '30',
          available: 'YES',
          totm: 200,
          passm: 75,
          soc: 'Active'
      },
      {
          courseCode: 1008,
          courseName: 'Data structure',
          courseDescription: 'Tree, Graph',
          noc: '10',
          available: 'NO',
          totm: 100,
          passm: 45,
          soc: 'Inactive'
      },
      {
          courseCode: 1009,
          courseName: 'Operating Systems',
          courseDescription:
              'CPU Scheduling, Memory Management, Disk Management',
          noc: '21',
          available: 'YES',
          totm: 200,
          passm: 75,
          soc: 'Active'
      },
      {
          courseCode: 1010,
          courseName: 'Compiler',
          courseDescription: 'Top down parsing, Bottom up Parsing',
          noc: '15',
          available: 'YES',
          totm: 200,
          passm: 75,
          soc: 'Active'
      }
  ];