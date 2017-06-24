import { getUserMedia } from './utilities/shims'

const constraints = {
  audio: true,
  video: false
}

const handleError = (error: Error) =>
  console.warn(error.message)

const handleSuccess = () =>
  console.info('🎤 Microphone access enabled.')

const application = () => {
  getUserMedia(constraints)
    .then(handleSuccess)
    .catch(handleError)
}

window.addEventListener('load', application, false)
