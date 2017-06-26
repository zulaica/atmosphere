export const noop = () => {}

export class Poller {
  intervalId: number

  start = (fn: Function, duration: number) => {
    if (!this.intervalId) {
      this.intervalId = setInterval(fn, duration)
    }
  }

  stop = () => {
    clearInterval(this.intervalId)
    this.intervalId = -1
  }
}
