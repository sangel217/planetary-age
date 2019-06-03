export function PlanetaryAge(dob, gender)
{
  this.dob = dob;
  this.currentDate = new Date();
  this.gender = gender;
}

PlanetaryAge.prototype.checkEarth = function(){
  let d = new Date(this.dob);
  let earthAge = this.currentDate.getFullYear() - d.getFullYear();
  let maleExpectancy = 0;
  let femaleExpectancy = 0;
  if(this.gender == "male"){
    maleExpectancy += 68;
  } else{
    femaleExpectancy += 72;
  }
  return [earthAge, (maleExpectancy || femaleExpectancy)];
}

PlanetaryAge.prototype.checkMercury = function() {
  let d = new Date(this.dob);
  let earthAge = this.currentDate.getFullYear() - d.getFullYear();
  let mercuryAge = earthAge/0.24;
  let maleExpectancy = 0;
  let femaleExpectancy = 0;
  if(this.gender == "male"){
    maleExpectancy += 283;
  } else{
    femaleExpectancy += 300;
  }
  return [parseInt(mercuryAge), (maleExpectancy || femaleExpectancy)];
}

PlanetaryAge.prototype.checkVenus = function() {
  let d = new Date(this.dob);
  let earthAge = this.currentDate.getFullYear() - d.getFullYear();
  let venusAge = earthAge/0.62;
  let maleExpectancy = 0;
  let femaleExpectancy = 0;
  if(this.gender == "male"){
    maleExpectancy += 109;
  } else{
    femaleExpectancy += 116;
  }
  return [parseInt(venusAge), (maleExpectancy || femaleExpectancy)];
}

PlanetaryAge.prototype.checkMars = function() {
  let d = new Date(this.dob);
  let earthAge = this.currentDate.getFullYear() - d.getFullYear();
  let marsAge = earthAge/1.88;
  let maleExpectancy = 0;
  let femaleExpectancy = 0;
  if(this.gender == "male"){
    maleExpectancy += 36;
  } else{
    femaleExpectancy += 38;
  }
  return [parseInt(marsAge), (maleExpectancy || femaleExpectancy)];
}

PlanetaryAge.prototype.checkJupiter = function() {
  let d = new Date(this.dob);
  let earthAge = this.currentDate.getFullYear() - d.getFullYear();
  let jupiterAge = earthAge/11.86;
  let maleExpectancy = 0;
  let femaleExpectancy = 0;
  if(this.gender == "male"){
    maleExpectancy += 5;
  } else{
    femaleExpectancy += 6;
  }
  return [parseInt(jupiterAge), (maleExpectancy || femaleExpectancy)];
}
