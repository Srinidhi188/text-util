import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm'; 
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  // const removeBodyClasses = () =>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
    
  // }

  const toggleMode = () => {
   // removeBodyClasses();
    //console.log(cls)

    // down line 29 will change the colors according to toggle mode(primary,warning,success,danger )
    //document.body.classList.add('bg-'+cls)//this will keep bg constant even if we change it to get all color we use removeBody Clases
    
    if (mode === 'light') { 
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
     // document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      <Router> 
              <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact 
               path="/about" 
              element={<About mode = {mode}  />} 
             /> 
             <Route  exact 
              path="/" 
              element= {
                <TextForm 
                  showAlert={showAlert} 
                  heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" 
                  mode={mode} 
                />
              }
             />
            {/* Optional: Add a 404 Not Found Route  */}
              <Route 
              path="*"
              element={<h1>404: Page Not Found</h1>} 
            /> 
          </Routes> 
        </div>
      </Router>
    </>
  );
}

export default App;
