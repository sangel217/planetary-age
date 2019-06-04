export function PlanetaryAge(dob, gender)
{
  this.dob = dob;
  this.currentDate = new Date();
  this.gender = gender;
  this.age = parseInt((this.currentDate - new Date(this.dob))/(31557600000));
}

PlanetaryAge.prototype.checkEarth = function(){
  let maleExpectancy = 0;
  let femaleExpectancy = 0;
  if(this.gender == "male"){
    maleExpectancy += 68;
  } else{
    femaleExpectancy += 72;
  }
  return [this.age, (maleExpectancy || femaleExpectancy)];
}

PlanetaryAge.prototype.checkMercury = function() {
  let mercuryAge = this.age/0.24;
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
  let venusAge = this.age/0.62;
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
  let marsAge = this.age/1.88;
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
  let jupiterAge = this.age/11.86;
  let maleExpectancy = 0;
  let femaleExpectancy = 0;
  if(this.gender == "male"){
    maleExpectancy += 5;
  } else{
    femaleExpectancy += 6;
  }
  return [parseInt(jupiterAge), (maleExpectancy || femaleExpectancy)];
}
