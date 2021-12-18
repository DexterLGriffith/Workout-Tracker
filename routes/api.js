const router = require("express").Router();
const { workout } = require("../model");


router.get("/api/workouts", (req, res) => {
    workout.find()
    .then((result) => {
        res.json(result)
    })
    .catch(err => {
        res.status(400).json(err);
    });
});
router.put("/api/workouts/:id", (req, res) => {
    const update = req.body; 
    workout.findByIdAndUpdate(
        req.params.id, 
        {$push:{ exercises: update}},
        {
            new: true
        })
        .then((result) => {
            res.json(result)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
router.post("/api/workouts", (req,res) => {
    workout.create(req.body)
    .then((result) => {
        res.json(result)
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;