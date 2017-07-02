export const displayStatusMessage = (type: string, status: string) => {
  const messageContainer = document.createElement('p')
  const message = document.createTextNode(status)
  messageContainer.appendChild(message)
  messageContainer.className = type

  document.body.appendChild(messageContainer)
}

// TODO: method parameter should be limited to actual Console methods
export const log = (method: string, message: string | number) => {
  return Promise.resolve(
    // Not happy about the <any> Console index fix...
    // tslint:disable-next-line:no-any
    (console as any)[method].call(console, message)
  )
}

export const noOp = () => { return }

export class Poller {
  private intervalId: number

// tslint:disable-next-line:ban-types
  public start = (fn: Function, duration: number) => {
    if (!this.intervalId) {
      this.intervalId = setInterval(fn, duration)
    }
  }

  public stop = () => {
    clearInterval(this.intervalId)
    this.intervalId = -1
  }
}
