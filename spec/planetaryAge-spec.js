import { PlanetaryAge } from './../src/PlanetaryAge.js';

describe('PlanetaryAge', function(){
  let reusableAge;

  beforeEach(function(){
    reusableAge = new PlanetaryAge ("1987, 7, 24");
  });

  it('should show how beforeEach() works', function() {
    console.log(reusableAge);
  });

  it('should calculate a users age on Earth', function() {
    expect(reusableAge.checkEarth()).toEqual(32);
  });

  it('should calculate a users age on Mercury', function() {
    expect(reusableAge.checkMercury()).toEqual(133);
  });

  it('should calculate a users age on Venus', function() {
    expect(reusableAge.checkVenus()).toEqual(51);
  });
});
