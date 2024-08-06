
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Register';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/Register" element={<Register />} />
        </Routes>
    </Router>
  );
}

export default App;
