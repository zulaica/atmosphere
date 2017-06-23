console.info('Hello, world!')

const handleError = () =>
  console.info('Microphone access disabled.')

const handleSuccess = () =>
  console.info('Microphone access enabled.')

navigator.mediaDevices.getUserMedia({ 'audio': true })
  .then(handleSuccess)
  .catch(handleError)
