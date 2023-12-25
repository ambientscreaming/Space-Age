export default class SpaceAge {
    constructor() {
        this.currentPlanet = "earth";
    }

    changeCurrentPlanet(newPlanet) {
        this.currentPlanet = newPlanet;
    }

    getCurrentAge(earthAge) {
        return earthAge;
    }
}

