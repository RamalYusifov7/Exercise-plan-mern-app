import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAddWorkoutMutation } from '../features/workouts/workoutApi'
import { clearInputs, handleChange } from '../features/workouts/workoutSlice'

function WorkoutFrom() {
  const [addWorkout, object] = useAddWorkoutMutation()
  const { error, isError } = object

  const dispatch = useDispatch()
  const { title, reps, load } = useSelector(store => store.workouts)


  const inputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleChange({ name, value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addWorkout({ title, reps, load })
    dispatch(clearInputs())
  }
  
  return (
    <form className="create" onSubmit={handleSubmit} >
      <h3>Add a New Workout</h3>
      <label>Excersize Title:</label>
      <input
        type="text"
        value={title}
        name="title"
        onChange={inputChange}
      />
      <label>Load (in kg):</label>
      <input
        type="number"
        value={load}
        name="load"
        onChange={inputChange}
      />
      <label>Number of Reps:</label>
      <input
        type="number"
        value={reps}
        name="reps"
        onChange={inputChange}
      />
      <button>Add Workout</button>
      {isError && <div className="error">{error.data?.msg}</div>}
    </form>
  )
}

export default WorkoutFrom