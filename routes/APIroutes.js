const db = require("../models")
// console.log("*******************************");
// console.log(db );
// console.log("*******************************");
module.exports = (app) => {
// POST
app.post("/api/workouts", (req, res) => {
    // Create current date/time
    db.Work.create({day: Date.now()})
    .then(Workout => {
        res.json(Workout);
    })
    .catch(err => {
        res.json(err)
    })
})

// PUT
app.put("/api/workouts/:id", (req, res) => {
    console.log(req.body)
    db.Exercise.create(req.body)
    .then((data) => db.Work.findOneAndUpdate(
        {_id: req.params.id},
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
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    })
})

// GET
    app.get("/api/workouts", (req, res) => {
        db.Work.find({})
        .populate("exercises")
        .then(dbWorkout=> {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.json(err);
        })
    })

    app.get("/api/workouts/range", (req, res) => {
        db.Work.find({})
        .populate("exercises")
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)
        })
    })
    
}