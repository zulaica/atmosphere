// TODO: method parameter should be limited to actual Console methods
const log = (method: string, message: string | number) => {
  return Promise.resolve(
    // Not happy about the <any> Console index fix...
    // tslint:disable-next-line:no-any
    (console as any)[method].call(console, message)
  )
}

export default log
