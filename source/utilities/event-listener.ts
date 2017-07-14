// tslint:disable-next-line
declare global {
  interface Node {
    on(
      event: string,
      eventListener: EventListener,
      options?: boolean | undefined
    ): void
  }
}

export default Node.prototype.on = (event, eventListener, options = false) => {
  addEventListener(event, eventListener, options)
}
