import { getUserMedia } from './utilities/shims'
import { errorHandler } from './utilities/error-handling'
import { log, Poller } from './utilities/helpers'

const constraints = {
  audio: true,
  video: false
}

const handleError = (error: string | Error) =>
  errorHandler(error)

const handleSuccess = () => {
  const currentSecondPoller = new Poller
  log('info', '🎤 Microphone access enabled.')
    .then(() => { currentSecondPoller.start(getCurrentSecond, 1000) })
    .then(() => setTimeout(currentSecondPoller.stop, 10000))
}

const getCurrentSecond = () => {
  const currentTime = new Date()
  const currentSecond = currentTime.getHours() * 3600 +
                        currentTime.getMinutes() * 60 +
                        currentTime.getSeconds()

  return Promise.resolve(
    currentSecond
  ).then(logCurrentSecond)
}

const logCurrentSecond = (second: number) =>
  console.log(second)

const application = () => {
  getUserMedia(constraints)
    .then(handleSuccess)
    .catch(handleError)
}

window.addEventListener('load', application, false)
