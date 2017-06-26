import { getUserMedia } from './utilities/shims'
import { errorHandler } from './utilities/error-handling'
import { Poller } from './utilities/helpers'

const constraints = {
  audio: true,
  video: false
}

const handleError = (error: string | Error) =>
  errorHandler(error)

const handleSuccess = () =>
  console.info('🎤 Microphone access enabled.')

const application = () => {
  const currentSecondPoller = new Poller

  getUserMedia(constraints)
    .then(handleSuccess)
    .then(() => { currentSecondPoller.start(getCurrentSecond, 1000) })
    .then(() => setTimeout(currentSecondPoller.stop, 10000))
    .catch(handleError)
}

const getCurrentSecond = () => {
  const currentTime = new Date()
  const currentSecond = (currentTime.getHours() * 3600) +
                        (currentTime.getMinutes() * 60) +
                        currentTime.getSeconds()

  return Promise.resolve(
    currentSecond
  ).then(logCurrentSecond)
}

const logCurrentSecond = (second: number) => {
  console.log(second)
}

window.addEventListener('load', application, false)
