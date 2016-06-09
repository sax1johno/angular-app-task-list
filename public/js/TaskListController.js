angular.module("TaskListApp")
.controller("TaskListController", function($scope, $http, $resource) {
    //     $scope.taskList = [
    //     "Task 1",
    //     "Task 2",
    //     "Task 3"
    // ];
    // var Task = $resource("/task");
    $http.get("/task")
        .then(function(response) {
            // onSuccess
            console.log(response);
            $scope.taskList = response.data;
        }, function(response) {
            // onError
        });
    // Task.get()
    //     .$promise
    //     .then(function(result) {
    //         $scope.taskList = result;
    //     })
    $scope.addTask = function() {
        $scope.taskList.push($scope.task);
        $http.post("/task", {"task": $scope.task})
            .then(function(response) {
                // onSuccess
                console.log(response);
            }, function(response) {
                // onFailure
                console.log(response);
            })
    }
});