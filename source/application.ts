const constraints = {
  audio: true,
  video: false
}

const handleError = () =>
  console.warn('Microphone access disabled.')

const handleSuccess = () =>
  console.info('Microphone access enabled.')

navigator.mediaDevices.getUserMedia(constraints)
  .then(handleSuccess)
  .catch(handleError)
