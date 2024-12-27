import { HashRouter as Router, Link, Routes, Route } from 'react-router-dom';
import routes from './routes';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <h1>React Router Demo</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Routes>
          {routes.map(({ path, component: Component }, key) => (
            <Route path={path} element={<Component />} key={key} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
