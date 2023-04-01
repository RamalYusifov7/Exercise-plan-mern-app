
import { WorkoutDetails, WorkoutFrom } from '../components';
import { useGetWorkoutsQuery } from '../features/workouts/workoutApi'
import Loading from '../components/Loading';

function Home() {

  const { data: workouts = [], isLoading } = useGetWorkoutsQuery();

  if (isLoading) {
    return <div className='loader-wrapper'>
    <span className='loader'></span>
</div>
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