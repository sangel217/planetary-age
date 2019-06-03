import { PlanetaryAge } from './../src/PlanetaryAge.js';

describe('PlanetaryAge', function(){
  let reusableAge;

  beforeEach(function(){
    reusableAge = new PlanetaryAge ("1987, 7, 24");
  });

  it('should show how beforeEach() works', function() {
    console.log(reusableAge);
  });

  it('should calculate a users age on earth', function() {
    expect(reusableAge.checkEarth()).toEqual(32);
  });
});
