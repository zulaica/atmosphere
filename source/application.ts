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
    .then(() => currentSecondPoller.start(getCurrentSecond, 1000))
    .then(() => setTimeout(currentSecondPoller.stop, 10000))
}

const getCurrentSecond = () => {
  const currentTime = new Date()
  const currentSecond = currentTime.getHours() * 3600 +
                        currentTime.getMinutes() * 60 +
                        currentTime.getSeconds() +
                        // Prevent a 0 value to allow for a simpler
                        // representation of totalDegrees and totalSeconds
                        1

  return Promise.resolve(
    currentSecond
  ).then(updateBackgroundColor)
}

const updateBackgroundColor = (currentSecond: number) => {
  const totalDegrees = 360
  const hueOffset = 240
  const totalSeconds = 86400

  const baseHue = hueOffset % totalDegrees
  const hueStep = totalDegrees / totalSeconds
  const currentHue = (baseHue + (hueStep * currentSecond)) % totalDegrees

  log('info', `currentSecond: ${currentSecond}`)
  log('info', `currentHue: ${currentHue}`)

  document.body.style.backgroundColor = `hsl(${currentHue}, 50%, 25%)`
}

const logContactInfo = () => {
  log('info', `
    ▶︎ ▲ ▼ ⬆︎ ▶︎  m a d e  t h i s .

          ┌────GITHUB─────┐
            ┌────────WEBSITE────────┐
 d a v i d @ z u l a i c a . i n f o
└───────────────EMAIL───────────────┘
          └────TWITTER────┘

`)
}

const application = () => {
  logContactInfo()

  getUserMedia(constraints)
    .then(handleSuccess)
    .catch(handleError)
}

window.addEventListener('load', application, false)
