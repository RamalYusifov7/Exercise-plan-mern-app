import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeUser } from '../features/users/userSlice'

function Navbar() {
  const dispatch = useDispatch()
  const { user } = useSelector(store => store.users)

  const handleClick = () => {
    dispatch(removeUser())
  }
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          {user ? <div>
            <button onClick={handleClick}>Log out</button>
          </div> : <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Signup</Link>
          </div>}
        </nav>
      </div>
    </header>
  )
}

export default Navbar