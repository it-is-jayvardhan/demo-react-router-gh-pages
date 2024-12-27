import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;

function App() {
  return (
    <Router basename={import.meta.env.VITE_PUBLIC_URL || ''}>
      <div>
        <h1>React Router Demo</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
