import { WorkoutDetails, WorkoutFrom } from '../components';

import { useGetWorkoutsQuery } from '../features/workouts/workoutApi'

function Home() {
  const { data: workouts, isLoading } = useGetWorkoutsQuery()

  if (isLoading) {
    return <div>loading...</div>
  }
  return (
    <div className="home">
      {workouts?.length ? (
        <div className="workouts">
          {workouts?.map(workout => (
            <WorkoutDetails {...workout} key={workout._id} />
          ))}
        </div>
      ) : <div>There is no workout on your list</div>}

      <WorkoutFrom />
    </div>
  )
}

export default Home