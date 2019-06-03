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
