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

  test('it determines users current age in earth years', () => {
    const spaceAge = new SpaceAge();
    expect(spaceAge.getCurrentAge(33)).toEqual(33);
  });

  test('it determines users current age in mercury years', () => {
    const spaceAge = new SpaceAge();
    spaceAge.changeCurrentPlanet("mercury");
    expect(spaceAge.getCurrentAge(33)).toEqual(137.5);
  });

  test('it determines users current age in venus years', () => {
    const spaceAge = new SpaceAge();
    spaceAge.changeCurrentPlanet("venus");
    expect(spaceAge.getCurrentAge(33)).toEqual(53.225806451612904);
  });

  test('it determines users current age in mars years', () => {
    const spaceAge = new SpaceAge();
    spaceAge.changeCurrentPlanet("mars");
    expect(spaceAge.getCurrentAge(33)).toEqual(17.5531914893617);
  });

  /*test('it determines users current age in jupiter years', () => {
    const spaceAge = new SpaceAge();
    spaceAge.changeCurrentPlanet("jupiter");
    expect(spaceAge.getCurrentAge(33)).toEqual(33/11.86);
  });*/
});