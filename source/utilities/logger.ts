interface ConsoleInterface extends Console {
    [index: string]:
      (value: string | boolean | undefined | Element) => {} | void
}

const log = (message: string | number, method: string = 'log') => {
  return Promise.resolve(
    (console as ConsoleInterface)[method].call(console, message)
  )
}

export default log
