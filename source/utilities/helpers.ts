// TODO: method parameter should be limited to actual Console methods
export const log = (method: string, message: string) => {
  return Promise.resolve(
    // Not happy about the <any> Console index fix...
    (<any>console)[method].call(console, message)
  )
}

export const noOp = () => {}

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
