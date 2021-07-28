import changeState from "./changeState";

const setBgHp  = changeState("BadGuyHitPoints");
const setBgDamage = changeState("BadGuyDamage");
const setBgInitiative = changeState("BadGuyInitiative")

export { setBgHp, setBgDamage, setBgInitiative};
