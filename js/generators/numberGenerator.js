class numberManager {
    constructor(minNumber, maxNumber) {
        this.minNumber = minNumber;
        this.maxNumber = maxNumber;
    }
    generateNumber() {
        return Math.floor((Math.random() * this.maxNumber - this.minNumber + 1) + this.minNumber);
    }
}