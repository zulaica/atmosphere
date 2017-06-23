const constraints = {
  audio: true,
  video: false
}

const handleError = () =>
  console.warn('Microphone access disabled.')

const handleSuccess = () =>
  console.info('Microphone access enabled.')

const application = () => {
  try {
    navigator.mediaDevices.getUserMedia(constraints)
      .then(handleSuccess)
      .catch(handleError)
  } catch(error) {
    console.error('Your browser is not supported.')
  }
}

window.addEventListener('load', application, false)
