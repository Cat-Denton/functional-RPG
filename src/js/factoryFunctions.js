import changeState from "./changeState";

const setStrength = changeState("Strength");
const setBody = changeState("Body");
const setMind = changeState("Mind");
const setSpeed = changeState("Speed");
const setCyber = changeState("Cyber");

export { setStrength, setBody, setMind, setSpeed, setCyber }
