// TODO: method parameter should be limited to actual Console methods
export const log = (method: string, message: string | number) => {
  return Promise.resolve(
    // Not happy about the <any> Console index fix...
    (console as any)[method].call(console, message) // tslint:disable-line
  )
}

export const noOp = () => { return }

export class Poller {
  private intervalId: number

  public start = (fn: Function, duration: number) => { // tslint:disable-line
    if (!this.intervalId) {
      this.intervalId = setInterval(fn, duration)
    }
  }

  public stop = () => {
    clearInterval(this.intervalId)
    this.intervalId = -1
  }
}
