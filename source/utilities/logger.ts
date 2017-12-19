interface ConsoleInterface extends Console {
    [index: string]:
      (value: string | boolean | undefined | Element) => {} | void
}

const log = (message: string | number, method: string = 'log') => {
  if (!(console as ConsoleInterface)[method]) {
    console.error(
      `'${method}' is not a valid Console method. Falling back to 'log'.`
    )
    method = 'log'
  }

  return Promise.resolve(
    (console as ConsoleInterface)[method].call(console, message)
  )
}

export default log
