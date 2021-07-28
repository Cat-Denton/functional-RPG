import changeState from "./changeState";

const setStrength = changeState("Strength");
const setBody = changeState("Body");
const setMind = changeState("Mind");
const setSpeed = changeState("Speed");
const setCyber = changeState("Cyber");
const setMaxHp = changeState("MaxHitPoints");
const setCurrentHp = changeState("CurrentHitPoints")
const setInit = changeState("Initiative");
const setMelee = changeState("Melee")
const setRanged = changeState("Ranged")
const setHacking = changeState("Hacking")
const setFastTalk = changeState("FastTalk")
const setName = changeState("Name");

export {
  setStrength, setBody, setMind, setSpeed, setCyber, setMaxHp, setName,
  setInit, setMelee, setRanged, setHacking, setFastTalk, setCurrentHp
}
