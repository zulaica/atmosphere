import { getUserMedia } from './utilities/shims'
import { formatError } from './utilities/error-handling'

const constraints = {
  audio: true,
  video: false
}

const handleError = (error: string | Error) =>
  formatError(error)

const handleSuccess = () =>
  console.info('🎤 Microphone access enabled.')

const application = () => {
  getUserMedia(constraints)
    .then(handleSuccess)
    .catch(handleError)

  setInterval(function() {
    getCurrentSecond()
      .then(logCurrentSecond)
  }, 1000)
}

const getCurrentSecond = () => {
  const currentTime = new Date()
  return Promise.resolve(
    (currentTime.getHours() * 3600) +
    (currentTime.getMinutes() * 60) +
    currentTime.getSeconds()
  )
}

const logCurrentSecond = (second: number) => {
  console.log(second)
}

window.addEventListener('load', application, false)
