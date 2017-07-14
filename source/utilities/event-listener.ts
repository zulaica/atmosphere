interface Window {
  on(
    event: string,
    eventListener: EventListenerOrEventListenerObject,
    options?: boolean | undefined
  ): void
}

Window.prototype.on = (event, eventListener, options = false) =>
  addEventListener(event, eventListener, options)
