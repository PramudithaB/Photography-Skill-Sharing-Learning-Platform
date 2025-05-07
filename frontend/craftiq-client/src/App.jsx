// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes'; // Move AppRoutes to its own file (optional)

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
