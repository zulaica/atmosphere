import { errorHandler } from './utilities/error-handling'
import { displayStatusMessage, log, Poller } from './utilities/helpers'
import { getUserMedia } from './utilities/shims'

const constraints = {
  audio: true,
  video: false
}

const handleError = (error: string | Error) =>
  errorHandler(error)

const handleSuccess = () => {
  const currentSecondPoller = new Poller()

  displayStatusMessage('success', '🎤 Microphone access enabled.')
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
  log('log', second)

const application = () => {
  log('info', '\n    ▶︎ ▲ ▼ ⬆︎ ▶︎  m a d e  t h i s . \n ')
  log('info', '          ┌────GITHUB─────┐')
  log('info', '            ┌────────WEBSITE────────┐')
  log('info', ' d a v i d @ z u l a i c a . i n f o')
  log('info', '└───────────────EMAIL───────────────┘')
  log('info', '          └────TWITTER────┘')

  getUserMedia(constraints)
    .then(handleSuccess)
    .catch(handleError)
}

window.addEventListener('load', application, false)
