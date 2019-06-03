export function PlanetaryAge(dob)
{
  this.dob = dob;
  this.currentDate = new Date();
}

PlanetaryAge.prototype.checkEarth = function(){
  let d = new Date(this.dob);
  let earthAge = this.currentDate.getFullYear() - d.getFullYear();
  return earthAge;
}

PlanetaryAge.prototype.checkMercury = function() {
  let d = new Date(this.dob);
  let earthAge = this.currentDate.getFullYear() - d.getFullYear();
  let mercuryAge = earthAge/0.24;
  return parseInt(mercuryAge);
}

PlanetaryAge.prototype.checkVenus = function() {
  let d = new Date(this.dob);
  let earthAge = this.currentDate.getFullYear() - d.getFullYear();
  let venusAge = earthAge/0.62;
  return parseInt(venusAge);
}

PlanetaryAge.prototype.checkMars = function() {
  let d = new Date(this.dob);
  let earthAge = this.currentDate.getFullYear() - d.getFullYear();
  let marsAge = earthAge/1.88;
  return parseInt(marsAge);
}

PlanetaryAge.prototype.checkJupiter = function() {
  let d = new Date(this.dob);
  let earthAge = this.currentDate.getFullYear() - d.getFullYear();
  let jupiterAge = earthAge/11.86;
  return parseInt(jupiterAge);
}
