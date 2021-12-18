const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [{ 
        name: {
            type: String,
            required: "Enter the name of the exercise"},
        
        type: {
            type: String, 
            required: "What type of exercise is this?"},
        
        weight: { 
            type: Number,
        },
        sets: { 
            type: Number,
        },
        reps: { 
            type: Number, 
        },
        duration: {
            type: Number, 
        },
        distance: {
            type: Number, 
        },

    }]
})

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;