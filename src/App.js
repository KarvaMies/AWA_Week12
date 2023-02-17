import './App.css';
import MyContainer from './components/MyContainer';
import About from './components/About';
import Header from './components/Header';
import { Suspense } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Suspense fallback="loading">
          <Routes>
            <Route path="/" element={<MyContainer />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
