import noOp from './noop'

const errorHandler = (error: string | Error) =>
  isLegacyError(error)
    .then(createErrorObject)
    .then(createFriendlyError)
    .catch(noOp)

const isLegacyError = (error: string | Error) => {
  if (typeof error === 'string') {
    return Promise.resolve(error)
  }

  return Promise.reject(createFriendlyError(error))
}

const createErrorObject = (error: string) => {
  const errorObject = new Error(error)
  errorObject.name = errorObject.message

  return errorObject
}

const createFriendlyError = (error: Error) => {
  switch (error.name) {
    case 'PERMISSION_DENIED':
    case 'PermissionDeniedError':
      return Promise
        .resolve({ status: '🚫🎤 Access to the microphone denied.' })
        .then(({status}) => displayError(status))
    default:
      return Promise
        .resolve({ status: error.message })
        .then(({status}) => displayError(status))
  }
}

const displayError = (status: string) => {
  const messageContainer = document.createElement('p')
  const message = document.createTextNode(status)
  messageContainer.appendChild(message)
  messageContainer.className = 'error'

  document.body.appendChild(messageContainer)
}

export default errorHandler
