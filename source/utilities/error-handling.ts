export const formatError = (error: any) => {
  isLegacyError(error)
    .then(createErrorObject)
    .then(createFriendlyError)
    .catch(createFriendlyError)
}

const isLegacyError = (error: any) => {
  if (typeof error === 'string') {
    return Promise.resolve(error)
  }

  return Promise.reject(error)
}

const createErrorObject = (error: string) => {
  let errorObject = new Error(error)
  errorObject.name = errorObject.message

  return Promise.resolve(errorObject)
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
