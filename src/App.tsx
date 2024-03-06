import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/" element={<SignInPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
