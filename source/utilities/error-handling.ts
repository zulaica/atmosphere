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
  let errorObject = new Error(error)
  errorObject.name = errorObject.message

  return errorObject
}

const createFriendlyError = (error: Error) => {
  let errorObject = error

  switch (errorObject.name) {
    case 'PERMISSION_DENIED':
    case 'PermissionDeniedError':
      errorObject = new Error('🎤 Microphone access disabled.')
  }

  console.error(errorObject.message)
}
