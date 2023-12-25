export default class SpaceAge {
    constructor() {
        this.currentPlanet = "earth";
    }

    changeCurrentPlanet(newPlanet) {
        this.currentPlanet = newPlanet;
    }

    getCurrentAge(earthAge) {
        switch (this.currentPlanet) {
            case 'earth':
                return earthAge;
            case 'mercury':
                return earthAge / .24;
            case 'venus':
                return earthAge / .62;
            case 'mars':
                return earthAge / 1.88;
            case 'jupiter':
                return earthAge / 11.86;
            default:
                return `that planet isn't in this solar system`;
        }

    }
}

