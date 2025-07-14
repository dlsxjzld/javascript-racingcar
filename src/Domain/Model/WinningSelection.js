export default class WinningSelection {
  #raceResult;

  #winners;

  constructor(raceResult) {
    this.#raceResult = raceResult;
    this.#winners = null;
  }

  #calculateMaxPosition() {
    const maxPosition = Math.max(
      ...this.#raceResult.map(({ position }) => position),
    );

    return maxPosition;
  }

  getWinners() {
    const maxPosition = this.#calculateMaxPosition();

    this.#winners = this.#raceResult.filter(
      ({ position }) => position === maxPosition,
    );

    return this.#winners.map(({ name }) => name);
  }
}
