interface ConsoleInterface extends Console {
    [index: string]:
      (value: string | boolean | undefined | Element) => {} | void
}

const CSS = {
  default: 'font-family: monospace;',
  log: 'color: #396039; background: #dfecdf;'
}

const log = (message: string | number, method: string = 'log') => {
  if (!(console as ConsoleInterface)[method]) {
    // tslint:disable-next-line:no-console
    console.error(
      `'${method}' is not a valid Console method. Falling back to 'log'.`
    )
    method = 'log'
  }

  return Promise.resolve(
    (console as ConsoleInterface)[method]
      .call(console, `%c${message}`, CSS.log.concat(' ', CSS.default))
  )
}

export default log
