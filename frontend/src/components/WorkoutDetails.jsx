import React from 'react'
import { useDeleteWorkoutMutation } from '../features/workouts/workoutApi'
import moment from "moment"

function WorkoutDetails({ _id: id, title, reps, load, createdAt }) {
  const [deleteWorkout] = useDeleteWorkoutMutation()
  const handleDelete = (id) => {
    deleteWorkout(id)
  }

  return (
    <div className="workout-details">
      <h4>{title}</h4>
      <p><strong>Load (kg): </strong>{load}</p>
      <p><strong>Number of reps: </strong>{reps}</p>
      <p>{moment().startOf(createdAt).fromNow()}</p>
      <span className="material-symbols-outlined" onClick={() => handleDelete(id)} >delete</span>
    </div>
  )
}

export default WorkoutDetails