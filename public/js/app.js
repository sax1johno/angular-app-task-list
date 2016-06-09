angular.module('TaskListApp', ["ui.router", "ngResource"])
.config(function($stateProvider) {
    $stateProvider
        .state("Home", {
            url: "/",
            controller: "HomeController",
            template: "<h1>Home</h1>"
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