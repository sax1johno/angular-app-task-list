var express = require('express'),
    app = express(),
    static = express.static,
    bodyParser = require('body-parser');

var myTasks = [
        "Task 1",
        "Task 2",
        "Task 3"
    ];

app.use(express.static("public"));
app.use(bodyParser());

app.get('/task', function(req, res) {
    res.send({taskList: myTasks});
});

app.post('/task', function(req, res) {
    var task = req.body.task;
    console.log(task);
    myTasks.push(task);
    res.status(200).send("A Ok");
});

app.put('/task', function(req, res) {
    res.send("Reached the TASK put method");
});

app.del("/task", function(req, res) {
    res.send("Reached the TASK del method");
})

app.listen(process.env.PORT);