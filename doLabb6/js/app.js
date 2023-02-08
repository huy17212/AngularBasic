
var app = angular.module('myApp', []);
app.controller('ListController', function ($scope) {
    $scope.curPage = 1,
        $scope.itemsPerPage = 5,
        $scope.maxSize = 2;

    this.items = itemsDetails;

    $scope.numOfPages = function () {
        return Math.ceil(this.items / $scope.itemsPerPage);
    };

    $scope.$watch('curPage + numPerPage', function () {
        var begin = (($scope.curPage - 1) * $scope.itemsPerPage)
        var end = begin + $scope.itemsPerPage;
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




