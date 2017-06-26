export const log = (method: string, message: any) => {
  return new Promise(() => {
    // Not happy about the <any> Console index fix...
    (<any>console)[method].call(console, message)
  })
}

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
