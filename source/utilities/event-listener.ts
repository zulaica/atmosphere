// tslint:disable-next-line
declare global {
  interface Window {
    on(
      event: string,
      eventListener: EventListener,
      options?: boolean | undefined
    ): void
  }
}

export default Window.prototype.on = (event, eventListener, options = false) =>
  addEventListener(event, eventListener, options)
