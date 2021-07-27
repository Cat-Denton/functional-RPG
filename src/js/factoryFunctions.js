import changeState from "./changeState";

const setStrength = changeState("Strength");
const setBody = changeState("Body");
const setMind = changeState("Mind");
const setSpeed = changeState("Speed");
const setCyber = changeState("Cyber");
const setHp = changeState("HitPoints");
const setName = changeState("Name");

export { setStrength, setBody, setMind, setSpeed, setCyber, setHp, setName }
