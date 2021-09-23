// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import stateControl from "./js/stateControl.js";
import { setStrength, setBody, setMind, setSpeed, setCyber, setMaxHp, setCurrentHp, setName, setInit, setMelee, setRanged, setHacking, setFastTalk } from './js/characterFunctions.js';
import { setBgHp, setBgDamage, setBgInitiative } from './js/badGuyFunctions.js';

$("body").on("click", "#ranged", function(){
  const currentState = stateControl();
  const bgHpLoss = 0-currentState.Ranged;
  const newState = stateControl(setBgHp(bgHpLoss))
  
  $('#bad-guy-hit-points').text(`Hit points: ${newState.BadGuyHitPoints}`);
});

$(document).ready(function () {
  $('#stats-form').submit(function (event) {

    const name = $('#name-input').val();
    const strength = parseInt($('#strength-input').val());
    const body = parseInt($('#body-input').val());
    const mind = parseInt($('#mind-input').val());
    const speed = parseInt($('#speed-input').val());
    const cyber = parseInt($('#cyber-input').val());
    const statsSum = strength + body + mind + speed + cyber;
    
    const BgHp = 30 
    const BgDamage = 3 
    const BgInitiative = 7

    if (statsSum === 25) {
      stateControl(setStrength(strength));
      stateControl(setBody(body));
      stateControl(setMind(mind));
      stateControl(setSpeed(speed));
      stateControl(setCyber(cyber));
      stateControl(setName(name));
      const hitPoints = body + Math.trunc(0.5 * strength) + Math.trunc(0.5 * cyber)
      stateControl(setMaxHp(hitPoints));
      stateControl(setCurrentHp(hitPoints));
      const initiative = speed + Math.trunc(0.5 * mind) + Math.trunc(0.5 * cyber)
      stateControl(setInit(initiative));
      const melee = strength + Math.trunc(0.5 * cyber) + Math.trunc(0.5 * speed)
      stateControl(setMelee(melee));
      const ranged = speed + Math.trunc(0.5 * mind) + Math.trunc(0.5 * cyber)
      stateControl(setRanged(ranged));
      const hacking = cyber + Math.trunc(0.5 * mind) + Math.trunc(0.5 * speed)
      stateControl(setHacking(hacking))
      const fastTalk = mind + body - Math.trunc(0.5 * cyber)
      stateControl(setFastTalk(fastTalk))
      stateControl(setBgHp(BgHp));
      stateControl(setBgDamage(BgDamage));
      stateControl(setBgInitiative(BgInitiative));
      
      const newState = stateControl();

      $('#strength').text(`Strength: ${newState.Strength}`);
      $('#body').text(`Body: ${newState.Body}`);
      $('#mind').text(`Mind: ${newState.Mind}`);
      $('#speed').text(`Speed: ${newState.Speed}`);
      $('#cyber').text(`Cyber: ${newState.Cyber}`);
      $('#name').text(`Name: ${newState.Name.substring(1)}`);
      $('#hit-points').text(`Current/Maximum Hit Points: ${newState.CurrentHitPoints}/${newState.MaxHitPoints}`);
      $('#initiative').text(`Initiative bonus: ${newState.Initiative}`);
      $('#melee').text(`Melee combat skill: ${newState.Melee}`);
      $('#ranged').text(`Ranged combat skill: ${newState.Ranged}`);
      $('#hacking').text(`Hacking skill: ${newState.Hacking}`);
      $('#fast-talk').text(`Fast talk skill: ${newState.FastTalk}`);  
      $('#bad-guy-hit-points').text(`Hit points: ${newState.BadGuyHitPoints}`);
      $('#bad-guy-damage').text(`Damage: ${newState.BadGuyDamage}`);
      $('#bad-guy-initiative').text(`Initiative: ${newState.BadGuyInitiative}`);
  
      $('#bad-guy-stat-block').show();
      $('#combat').show();
      $('#stat-block').show();
      $('#stats-warn').hide();
      $('#stats-form').hide();
      event.preventDefault();
    } else {
      $('#stats-warn').show();
      event.preventDefault();
    }    
  });
  
});

