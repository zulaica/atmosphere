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

// tslint:disable-next-line
interface Node extends OnEventMethodInterface { }
// tslint:disable-next-line
interface Window extends OnEventMethodInterface { }

Document.prototype.on = onEventMethod
Window.prototype.on = onEventMethod
