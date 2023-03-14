import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home, Login, Register } from "./pages/index"
import { Navbar } from "./components/index"
import ProtectedRoute from './pages/ProtectedRoute'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<ProtectedRoute>
                <Home />
              </ProtectedRoute>}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/register"
              element={<Register />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
