interface ConsoleInterface {
    // Not happy about the <any> Console index fix...
    // tslint:disable-next-line:no-any
    [index: string]: any
}

// TODO: method parameter should be limited to actual Console methods
const log = (method: string, message: string | number) => {
  return Promise.resolve(
    (console as ConsoleInterface)[method].call(console, message)
  )
}

export default log
