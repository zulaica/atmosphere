import { noop } from './helpers'

export const formatError = (error: string | Error) => {
  isLegacyError(error)
    .then(createErrorObject)
    .then(createFriendlyError)
    .catch(noop)
}

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
      return Promise.resolve('🎤 Microphone access disabled.')
        .then(displayErrorMessage)
    default:
      return Promise.resolve(error.message)
        .then(displayErrorMessage)
  }
}

const displayErrorMessage = (error: string) => {
  const errorMessage = document.createTextNode(error)
  document.body.appendChild(errorMessage)
}
