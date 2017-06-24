const isLegacyError = (error: string) => {
  return typeof error === 'string'
}

export const createFriendlyError = (error: any) => {
  let errorObject = error

  if (isLegacyError(error)) {
    errorObject = new Error(error)
    errorObject.name = errorObject.message
  }

  switch (errorObject.name) {
    case 'PERMISSION_DENIED':
    case 'PermissionDeniedError':
      errorObject = new Error('🎤 Microphone access disabled.')
  }

  console.log(errorObject.message)
}
