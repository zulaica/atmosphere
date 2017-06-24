import { getUserMedia } from './utilities/shims'

const constraints = {
  audio: true,
  video: false
}

const createFriendlyError = (error: Error) => {
  let friendlyError: Error = error
  switch (error.name) {
    case 'PermissionDeniedError':
      friendlyError = new Error('🎤 Microphone access disabled.')
  }
  console.log(friendlyError.message)
}

const handleError = (error: Error) =>
  createFriendlyError(error)

const handleSuccess = () =>
  console.info('🎤 Microphone access enabled.')

const application = () => {
  getUserMedia(constraints)
    .then(handleSuccess)
    .catch(handleError)
}

window.addEventListener('load', application, false)
