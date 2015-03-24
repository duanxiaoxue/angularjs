var authorCtrls = angular.module('authorCtrls', []);

authorCtrls.controller('AuthorDescCtrl', ['$scope',
    function($scope) {
        $scope.desc = {
            text: '此模块用来列举所以注册的书本作者'
        };
    }
]);

authorCtrls.controller('AuthorListCtrl', ['$scope',
    function($scope) {
        $scope.authors =[
        	{name:"东方不败",comment:"葵花宝典的最强使用者"},
        	{name:"《赵飞燕",comment:"楚王爱其瘦腰"},
        	{name:"貂蝉",comment:"不知道喜欢吕布不"}
        ]
    }
]);

