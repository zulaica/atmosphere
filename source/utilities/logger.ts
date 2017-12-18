interface ConsoleInterface extends Console {
    [index: string]:
      (value: string | boolean | undefined | Element) => {} | void
}

const log = (method: string, message: string | number) => {
  return Promise.resolve(
    (console as ConsoleInterface)[method].call(console, message)
  )
}

export default log
