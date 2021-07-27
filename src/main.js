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
      const newStateStrength = stateControl (setStrength(strength));
      $('#strength').text(`Strength: ${newStateStrength.Strength}`);
  
      const newStateBody = stateControl(setBody(body));
      $('#body').text(`Body: ${newStateBody.Body}`);
  
      const newStateMind = stateControl(setMind(mind));
      $('#mind').text(`Mind: ${newStateMind.Mind}`);
  
      const newStateSpeed = stateControl(setSpeed(speed));
      $('#speed').text(`Speed: ${newStateSpeed.Speed}`);
  
      const newStateCyber = stateControl(setCyber(cyber));
      $('#cyber').text(`Cyber: ${newStateCyber.Cyber}`);

      const newStateName = stateControl(setName(name));
      $('#name').text(`Name: ${newStateName.Name}`);

      const hitPoints = body + Math.trunc(0.5*strength) + Math.trunc(0.5*cyber)

      const newStateHP = stateControl(setHp(hitPoints));
      $('#hit-points').text(`Hit Points: ${newStateHP.HitPoints}`);

      $('#stats-warn').hide();
      $('#stats-form').hide();
      event.preventDefault();
    } else {
      $('#stats-warn').show();
      event.preventDefault();
    }
  });
});


