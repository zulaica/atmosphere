interface OnEventMethodInterface {
  on: (
    event: string,
    eventListener: EventListenerOrEventListenerObject,
    options?: boolean | undefined
  ) => void
}

const onEventMethod =
  (event: string,
   eventListener: EventListenerOrEventListenerObject,
   options = false) =>
    addEventListener(event, eventListener, options)

interface Node extends OnEventMethodInterface { this: Node }
Document.prototype.on = onEventMethod

interface Window extends OnEventMethodInterface { this: Window }
Window.prototype.on = onEventMethod
