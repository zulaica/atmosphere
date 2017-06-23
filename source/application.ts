console.info('Hello, world!')

navigator.mediaDevices.getUserMedia({ 'audio': true })
  .then(() => {
    console.info('Microphone access enabled.')
  })
  .catch(() => {
    console.warn('Microphone access disabled.')
  })
