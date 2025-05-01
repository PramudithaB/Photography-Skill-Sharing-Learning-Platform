import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import event workshop components
import EventWorkshopList from './pages/eventWorkshop/EventWorkshopList'
import EventRegistrationForm from './pages/eventWorkshop/EventRegistrationForm'
import EventRegistrationDetails from './pages/eventWorkshop/EventRegistrationDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="nav-logo">
            <a href="/">
              <img src={viteLogo} className="logo" alt="Vite logo" />
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/event-workshop">Events & Workshops</Link></li>
            {/* Add more navigation links here */}
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={
              <div className="home-container">
                <h1>Photography Skill Sharing Platform</h1>
                <div className="card">
                  <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                  </button>
                  <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                  </p>
                </div>
              </div>
            } />
            
            {/* Event Workshop Routes */}
            <Route path="/event-workshop" element={<EventWorkshopList />} />
            <Route path="/event-workshop/create" element={<EventRegistrationForm />} />
            <Route path="/event-workshop/:id" element={<EventRegistrationDetails />} />
            <Route path="/event-workshop/edit/:id" element={<EventRegistrationForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
