// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import stateControl from "./js/stateControl.js";
import {setStrength, setBody, setMind, setSpeed, setCyber, setHp, setName } from './js/factoryFunctions.js';

$(document).ready(function() {  
  $('#stats-form').submit(function(event) {

    const name = $('#name-input').val()
    const strength = parseInt($('#strength-input').val())
    const body = parseInt($('#body-input').val())
    const mind = parseInt($('#mind-input').val())
    const speed = parseInt($('#speed-input').val())
    const cyber = parseInt($('#cyber-input').val())
    
    const statsSum = strength + body + mind + speed + cyber;

    if(statsSum === 25)
    {
      stateControl(setStrength(strength));
      stateControl(setBody(body));
      stateControl(setMind(mind));
      stateControl(setSpeed(speed));
      stateControl(setCyber(cyber));
      stateControl(setName(name));
      const hitPoints = body + Math.trunc(0.5*strength) + Math.trunc(0.5*cyber)
      stateControl(setHp(hitPoints));
      const newState = stateControl();

      $('#strength').text(`Strength: ${newState.Strength}`);
  
      $('#body').text(`Body: ${newState.Body}`);
  
      $('#mind').text(`Mind: ${newState.Mind}`);
  
      $('#speed').text(`Speed: ${newState.Speed}`);
  
      $('#cyber').text(`Cyber: ${newState.Cyber}`);

      $('#name').text(`Name: ${newState.Name.substring(1)}`);

      $('#hit-points').text(`Hit Points: ${newState.HitPoints}`);

      $('#stats-warn').hide();
      $('#stats-form').hide();
      event.preventDefault();
    } else {
      $('#stats-warn').show();
      event.preventDefault();
    }
  });
});


