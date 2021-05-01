const db = require("../models")

module.exports = function (app) {

    // GET routes
    app.get("/api/workout", (req, res) => {
        db.Workout.find({})
            .populate("exercises")
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workout/range", (req, res) => {
        db.Workout.find({})
            .populate("exercises")
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // POST route
    app.post("/api/workout", (req, res) => {
        db.Workout.create({ day: Date.now() })
            .then(workout => {
                res.json(workout);
            }).catch(err => {
                res.json(err);
            });
    });

    // PUT route
    app.put("/api/workout/:id", (req, res) => {

        db.Exercise.create(req.body)
            .then((data) => db.Workout.findOneAndUpdate(
                { _id: req.params.id },
                {
                    $push: {
                        exercises: data._id
                    },
                    $inc: {
                        totalDuration: data.duration
                    }
                },
                { new: true })
            )
            .then(dbWorkout => {
                res.json(dbWorkout);
            }).catch(err => {
                res.json(err);
            });
    });
};