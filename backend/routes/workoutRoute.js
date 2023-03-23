const express = require("express")
const { getWorkout, getWorkouts, addWorkout, updateWorkout, deleteWorkout } = require("../controllers/workoutController")
const requireAuth = require("../middlewares/requireAuth")
const router = express.Router()

router.use(requireAuth)

router.get("/", getWorkouts)
router.get("/:id", getWorkout)
router.post("/", addWorkout)
router.patch("/:id", updateWorkout)
router.delete("/:id", deleteWorkout)
module.exports = router