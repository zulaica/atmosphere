export const createFriendlyError = (error: Error) => {
  let friendlyError: Error = error
  switch (error.name) {
    case 'PermissionDeniedError':
      friendlyError = new Error('🎤 Microphone access disabled.')
  }
  console.log(friendlyError.message)
}
