const mongoose = require("mongoose")
const Workout = require("../models/workout")

const getWorkouts = async (req, res) => {
    const workouts = await Workout.find().sort({ createdAt: -1 })
    res.status(200).json(workouts)
}
const addWorkout = async (req, res) => {
    const { title, reps, load } = req.body

    if (!title || !reps || !load) {
        return res.status(400).json({ msg: "Please fill out all the fields" })
    }
    try {
        const workout = await Workout.create({
            title, reps, load
        })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const getWorkout = async (req, res) => {
    const { id } = req.params

    // checking if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "no such workout" })
    }
    const workout = await Workout.findById(id)
    if (!workout) {
        return res.status(400).json({ error: "no such workout" })
    }
    res.status(200).json(workout)
}
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    // checking if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "no such workout" })
    }
    const workout = await Workout.findByIdAndDelete(id)

    if (!workout) {
        return res.status(400).json({ error: "no such workout" })
    }
    res.status(200).json(workout)
}
const updateWorkout = async (req, res) => {
    const { id } = req.params

    // checking if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "no such workout" })
    }
    const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body })
    if (!workout) {
        return res.status(400).json({ error: "no such workout" })
    }
    res.status(200).json(workout)
}
module.exports = {
    getWorkout,
    getWorkouts,
    addWorkout,
    deleteWorkout,
    updateWorkout
}