//import logo from './logo.svg';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'    //imrs
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



//let name = "Rajat";
function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=> {
      setAlert(null);
    },1500);
  }

  const toggleMode = ()=>{
        if(mode === 'light')
        {
          setMode('dark');
          document.body.style.backgroundColor = '#042743'
          showAlert("Dark mode has been enabled","success");
          document.title = "Textutilis - Dark Mode";

          // setInterval(()=>{
          //   document.title = " Textutilis is amazing";
          // },2000);

          // setInterval(()=>{
          //   document.title = " Install Textutilis Now";
          // },1500);
        }
        else
        {
          setMode('light');
          document.body.style.backgroundColor = 'white'
          showAlert("Light mode has been enabled","success");
          document.title = "Textutilis - Light Mode";
        }


  }



  return (
    <>
    {/* <Router> */}
    <Navbar title="Textutilis" aboutText="About" mode = {mode}  toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-3 ">
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
    {/* <Switch> */}
      {/* /users -- component 1
      /users/home --- component 2 */}
      {/* <Route exact path="/about">
        <About />
      </Route>
     
      <Route exact path="/"> */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode = {mode}/>
        
      {/* </Route>
    </Switch> */}
{/*     
    <About title="About"/>  */}
    </div>
    {/* </Router> */}
    
    </>
  );
}

export default App;
