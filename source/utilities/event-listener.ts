const on = (eventTarget: EventTarget,
            event: string,
            eventListener: EventListener,
            options: boolean | AddEventListenerOptions = false) =>
  eventTarget.addEventListener(event, eventListener, options)

export default on
