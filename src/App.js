import PaginaIntroducao from './components/PaginaIntroducao';
import './App.css';
import PaginaLogin from './components/PaginaLogin';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import Ia from './components/Ia';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PaginaIntroducao />} />
          <Route path="/login" element={<PaginaLogin />} />
          <Route path="/DashBoard" element={<DashBoard />} />
          <Route path="/Ia" element={<Ia />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
