import { PlanetaryAge } from './../src/PlanetaryAge.js';

describe('PlanetaryAge', function(){
  let reusableAge;

  beforeEach(function(){
    reusableAge = new PlanetaryAge ("1987, 7, 24", "male");
  });

  it('should show how beforeEach() works', function() {
    console.log(reusableAge);
  });

  it('should calculate a users age on Earth', function() {
    console.log(reusableAge.checkEarth());
    expect(reusableAge.checkEarth()).toEqual([32, 68]);
  });

  it('should calculate a users age on Mercury', function() {
    expect(reusableAge.checkMercury()).toEqual([133, 283]);
  });

  it('should calculate a users age on Venus', function() {
    expect(reusableAge.checkVenus()).toEqual([51, 109]);
  });

  it('should calculate a users age on Mars', function() {
    expect(reusableAge.checkMars()).toEqual([17, 36]);
  });

  it('should calculate a users age on Jupiter', function() {
    expect(reusableAge.checkJupiter()).toEqual([2, 5]);
  });
});
