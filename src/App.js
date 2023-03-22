import React, {useState} from 'react';
import displayComponent from './Components/displayComponent';
import btnComponent from './Components/btnDisplayComponent';
import './App.css';


function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
           <displayComponent time = {time}/>
           <btnComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
