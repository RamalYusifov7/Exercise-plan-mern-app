import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeUser } from '../features/users/userSlice'
import { rootApi } from '../features/api/apiSlice'
import { FaUserCircle } from "react-icons/fa"
import { useToggle } from '../hooks/useToggle'
function Navbar() {
  const { active, handleToggle } = useToggle()
  const dispatch = useDispatch()
  const { user } = useSelector(store => store.users)
  const handleClick = () => {
    dispatch(removeUser())
    dispatch(rootApi.util.resetApiState());
  }
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1 className='logo'>Exercise Plan</h1>
        </Link>
        <nav>
          {user ? <div className='profile-wrapper'>
            <div className='name'>
              {user.name}
            </div>
            <div className='profile-icon' onClick={handleToggle}>
              <FaUserCircle />
            </div>
            <div className={`profile-box ${active && "active"}`}>
              <button onClick={handleClick}>Logout</button>
            </div>
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