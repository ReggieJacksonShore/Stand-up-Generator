import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
     return (
        <div>
           <Header/>
           <Buttons/>
           <Content/>
           <Footer/>
        </div>
     );
  }
}
class Header extends React.Component {
  render() {
     return (
        <div className="Header">
           <h1>Stand-up Generator</h1>
        </div>
     );
  }
}

class Buttons extends React.Component {
  render() {
     return (
        <div className="Buttons">
            <span style={{ marginRight: "12px" }}>15:00 / <b>15:00 mins</b></span>
            <button><i className="material-icons" style={{ fontSize: "24px" }}>play_arrow</i></button>
            <button><i>-1 min</i></button>
            <button><i>+ 1 min</i></button> 
                <button><i>Restart</i></button><br /><br />  
            <span style={{ marginRight: "12px" }}><b>6 participants</b></span>
            <input type="text" placeholder="Name" value="" onChange="" />
            <button><i>Add</i></button>
            <button><i>Randomize</i></button>
        </div>
     );
  }
}

class Content extends React.Component {

  
  render() {
    const elements = ['Reggie', 'Eitan', 'James', 'Josh', 'Karthik', 'Nam'];
    return (
      <div className="Content">
        

        <ul>
          {elements.map((value, index) => {
            return <li key={index}>
              <span className="left" >
                <span style={{ marginRight: "12px" }}>{(index == 0) ? '2:30 / 2:30 minutes' : ''}</span>
                <button><i className="material-icons" style={{ fontSize: "24px" }}>play_arrow</i></button>
                <button><i>Restart</i></button>
                <button><i>+ 30 sec</i></button>
                <button>Next</button>
              </span>

              <span className="right">
                {value}&nbsp;&nbsp;<button style={{ marginLeft: "12px" }}>Remove</button>
              </span>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
     return (
        <div className="Content">
           <p>&copy; Stand-up Generator. All rights reserved.</p>
        </div>
     );
  }
}

export default App;

// Timer

function Timer() {
  const [seconds, setSeconds] = React.useState(120);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds('BOOOOM!');
    }
  });

  return (
    <div className="App">
      <div>
        {secondsToHms(seconds)}
      </div>
    </div>
  );
}

function Buttons2() {
  const [seconds, setSeconds] = React.useState(120);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds('BOOOOM!');
    }
  });

  return (
    <div className="Buttons">
      <button>
        {secondsToHms(seconds)}
      </button>
    </div>
  );
}

// Format time

function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return hDisplay + mDisplay + sDisplay; 
}