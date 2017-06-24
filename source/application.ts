import { getUserMedia } from './utilities/shims'
import { createFriendlyError } from './utilities/error-handling'

const constraints = {
  audio: true,
  video: false
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
