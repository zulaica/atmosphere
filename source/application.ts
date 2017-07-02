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
  displayStatusMessage('success', '🎤 Microphone access enabled.')

  const currentSecondPoller = new Poller()

  getCurrentSecond()
    .then(updateBackgroundColor)
    .then(() => currentSecondPoller.start(() => {
      getCurrentSecond()
        .then(updateBackgroundColor)
    }, 240 * 1000)
    )
    .then(() => setTimeout(currentSecondPoller.stop, 240 * 10 * 1000))
}

const getCurrentSecond = () => {
  const currentTime = new Date()
  const currentSecond = currentTime.getHours() * 3600 +
                        currentTime.getMinutes() * 60 +
                        currentTime.getSeconds() +
                        1 // Prevent a 0 value to allow for a simpler
                          // representation of totalDegrees and totalSeconds.

  return Promise.resolve(currentSecond)
}

const updateBackgroundColor = (currentSecond: number) => {
  const totalDegrees = 360
  const hueOffset = 240 // Start the day (midnight/0) at blue.
  const totalSeconds = 86400 // Total number of seconds in a 24-hour period.

  const baseHue = hueOffset % totalDegrees
  const hueStep = totalDegrees / totalSeconds
  const currentStep = hueStep * currentSecond
  const currentHue = (baseHue + currentStep) % totalDegrees

  document.body.style.backgroundColor = `hsl(${currentHue}, 50%, 25%)`

  log('info', `
    ⏳ currentSecond: ${currentSecond}
    🎨 currentHue: ${currentHue}
    🖍 RGB value: ${document.body.style.backgroundColor}
  `)
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
