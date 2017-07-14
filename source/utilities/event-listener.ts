interface Window {
  on(
    event: string,
    eventListener: EventListener,
    options?: boolean | undefined
  ): void
}

Window.prototype.on = (event, eventListener, options = false) =>
  addEventListener(event, eventListener, options)
