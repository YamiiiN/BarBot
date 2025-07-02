import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FaceRecognition from './pages/FaceRecognition';
import DrinkMenu from './pages/DrinkMenu';
import DrinkDetail from './pages/DrinkDetail.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/face-recognition" element={<FaceRecognition />} />
          <Route path="/drinks" element={<DrinkMenu />} />
          <Route path="/drink/:drinkName" element={<DrinkDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;