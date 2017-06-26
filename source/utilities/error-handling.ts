import { displayStatusMessage, noOp } from './helpers'

export const errorHandler = (error: string | Error) => {
  isLegacyError(error)
    .then(createErrorObject)
    .then(createFriendlyError)
    .catch(noOp)
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
      return Promise
        .resolve({ type: 'error', status: '🎤 Microphone access disabled.' })
        .then(({type, status}) => displayStatusMessage(type, status))
    default:
      return Promise
        .resolve({ type: 'error', status: error.message })
        .then(({type, status}) => displayStatusMessage(type, status))
  }
}
