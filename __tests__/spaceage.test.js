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

  test('it changes the current planet to mars', () => {
    const spaceAge = new SpaceAge();
    spaceAge.changeCurrentPlanet("mars");
    expect(spaceAge.currentPlanet).toEqual("mars");
  });

  test('it changes the current planet to jupiter', () => {
    const spaceAge = new SpaceAge();
    spaceAge.changeCurrentPlanet("jupiter");
    expect(spaceAge.currentPlanet).toEqual("jupiter");
  });
});