// ROUTER
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// BOOTSTRAP
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// PAGES
import Home from './pages/Home';
// COMPONENTS
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          {/* <Footer /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
