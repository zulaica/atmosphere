class Poller {
  public duration: number

  private intervalId: number

  constructor(interval: number) {
    this.duration = interval
  }

  public start = (fn: VoidFunction) => {
    if (!this.intervalId) {
      this.intervalId = setInterval(fn, this.duration)
    }
  }

  public stop = () => {
    clearInterval(this.intervalId)
    this.intervalId = -1
  }
}

export default Poller
