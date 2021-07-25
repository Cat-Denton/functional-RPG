// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import stateControl from "./js/stateControl.js";
import setStrength from './js/factoryFunctions.js';

// setBody, setMind, setSpeed, setCyber 

$(document).ready(function() {  
  $('#set-strength').click(function(event) {
    
    const newState = stateControl (setStrength);
    debugger;
    $('#strength').text(`Strength: ${newState.strength}`);

    // const newState = stateControl(setBody(6));
    // $('#body').text(`Body: ${newState.body}`);

    // const newState = stateControl(setMind(6));
    // $('#mind').text(`Mind: ${newState.mind}`);

    // const newState = stateControl(setSpeed(6));
    // $('#speed').text(`Speed: ${newState.speed}`);

    // const newState = stateControl(setCyber(6));
    // $('#cyber').text(`Cyber: ${newState.cyber}`);
    event.preventDefault();
  });
});


