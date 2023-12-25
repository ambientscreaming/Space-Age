import SpaceAge from '../src/index.js';

describe('SpaceAge', () => {

  test('it creates an empty instance of the class', () => {
    const spaceAge = new SpaceAge();
    expect(spaceAge).toBeInstanceOf(SpaceAge);
  });

  test('it sets earth as the default planet', () => {
    const spaceAge = new SpaceAge();
    expect(spaceAge.currentPlanet).toEqual("earth");
  });
});