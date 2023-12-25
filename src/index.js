export default class SpaceAge {
    constructor() {
        this.currentPlanet = "earth";
        this.earthAge = null;
    }

    changeCurrentPlanet(newPlanet) {
        this.currentPlanet = newPlanet;
    }

    setEarthAge(earthAge) {
        this.earthAge = earthAge;
    }

    yearsSinceBirthday(pastBirthday) {
        switch (this.currentPlanet) {
            case 'earth':
                return this.earthAge - pastBirthday;
            case 'mercury':
                return (this.earthAge - pastBirthday) / .24;
            case 'venus':
                return (this.earthAge - pastBirthday) / .62;
        }
    }

    getCurrentAge() {
        switch (this.currentPlanet) {
            case 'earth':
                return this.earthAge;
            case 'mercury':
                return this.earthAge / .24;
            case 'venus':
                return this.earthAge / .62;
            case 'mars':
                return this.earthAge / 1.88;
            case 'jupiter':
                return this.earthAge / 11.86;
            default:
                return `that planet isn't in this solar system`;
        }

    }
}

