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

  test('it changes the current planet to mercury', () => {
    const spaceAge = new SpaceAge();
    spaceAge.changeCurrentPlanet("mercury");
    expect(spaceAge.currentPlanet).toEqual("mercury");
  });

  test('it changes the current planet to venus', () => {
    const spaceAge = new SpaceAge();
    spaceAge.changeCurrentPlanet("venus");
    expect(spaceAge.currentPlanet).toEqual("venus");
  });
});