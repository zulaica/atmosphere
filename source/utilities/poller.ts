export class Poller {
  public duration: number

  private intervalId: number

  constructor(interval: number) {
    this.duration = interval
  }

// tslint:disable-next-line:ban-types
  public start = (fn: Function) => {
    if (!this.intervalId) {
      this.intervalId = setInterval(fn, this.duration)
    }
  }

  public stop = () => {
    clearInterval(this.intervalId)
    this.intervalId = -1
  }
}
