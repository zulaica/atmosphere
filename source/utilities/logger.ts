interface ConsoleInterface extends Console {
    // tslint:disable-next-line:no-any
    [index: string]: any
}

const log = (method: string, message: string | number) => {
  return Promise.resolve(
    (console as ConsoleInterface)[method].call(console, message)
  )
}

export default log
