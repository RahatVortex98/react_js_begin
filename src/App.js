import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import About from './components/About';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'Success');
      document.title = 'Light Mode';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode has been enabled', 'Success');
      document.title = 'Dark Mode';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={<TextForm heading="Enter Your Text Here" mode={mode} showAlert={showAlert} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
