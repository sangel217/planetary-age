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
