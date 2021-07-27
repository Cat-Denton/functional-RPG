// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import stateControl from "./js/stateControl.js";
import {setStrength, setBody, setMind, setSpeed, setCyber} from './js/factoryFunctions.js';

 

$(document).ready(function() {  
  $('#stats-form').submit(function(event) {
    
    const newStateStrength = stateControl (setStrength(parseInt($('#strength-input').val())));
    $('#strength').text(`Strength: ${newStateStrength.Strength}`);

    const newStateBody = stateControl(setBody(parseInt($('#body-input').val())));
    $('#body').text(`Body: ${newStateBody.Body}`);

    const newStateMind = stateControl(setMind(parseInt($('#mind-input').val())));
    $('#mind').text(`Mind: ${newStateMind.Mind}`);

    const newStateSpeed = stateControl(setSpeed(parseInt($('#speed-input').val())));
    $('#speed').text(`Speed: ${newStateSpeed.Speed}`);

    const newStateCyber = stateControl(setCyber(parseInt($('#cyber-input').val())));
    $('#cyber').text(`Cyber: ${newStateCyber.Cyber}`);
    event.preventDefault();
  });
});


