angular.module('TaskListApp', ["ui.router"])
.config(function($stateProvider) {
    $stateProvider
        .state("Home", {
            url: "/",
            controller: "HomeController",
            views: {
                "Header": {
                    template: "<h2>Header inside the home controller</h2>"
                },
                "": {
                    template: "<h1>Home Content</h1>"
                },
                "Footer": {
                    template: "&copy; 2016 Someone Else"
                }
            }
        })
        .state("Dashboard", {
            url: "/dashboard",
            template: "<h1>{{ hi }}</h1>",
            controller: "DashboardController"
        })
        .state("TaskList", {
            url: "/taskList",
            templateUrl: "/templates/list.html",
            controller: "TaskListController"
        });
})
.controller("TaskListController", function($scope) {
})