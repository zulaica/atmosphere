import { errorHandler } from './utilities/error-handling'
import { log, Poller } from './utilities/helpers'
import { getUserMedia } from './utilities/shims'

const constraints = {
  audio: true,
  video: false
}

const handleError = (error: string | Error) =>
  errorHandler(error)

const handleSuccess = () => {
  log('info', `🎤 Microphone access enabled.`)

  const pollAt240Seconds = new Poller() // 240 seconds is the minimum amount of
                                        // time required to generate a new RGB
                                        // value.

  renderBackground()
    .then(() => pollAt240Seconds.start(() => {
      renderBackground()
    }, 240 * 1000))
    .then(() => setTimeout(pollAt240Seconds.stop, 240 * 1000 * 10))
}

const getCurrentSecond = () => {
  const currentTime = new Date()
  const currentSecond = currentTime.getHours() * 3600 +
                        currentTime.getMinutes() * 60 +
                        currentTime.getSeconds() +
                        1 // Prevent a 0 value to allow for a simpler
                          // representation of totalDegrees and totalSeconds.

  log('info', `⏳ currentSecond: ${currentSecond}`)

  return Promise.resolve(currentSecond)
}

const getCurrentHue = (currentSecond: number) => {
  const totalDegrees = 360
  const hueOffset = 240 // Start the day (midnight/0) at blue.
  const totalSeconds = 86400 // Total number of seconds in a 24-hour period.

  const hueStep = totalDegrees / totalSeconds
  const currentStep = hueStep * currentSecond
  const currentHue = (hueOffset + currentStep) % totalDegrees

  log('info', `🎨 currentHue: ${currentHue}`)

  return Promise.resolve(currentHue)
}

const updateBackgroundColor = (currentHue: number) => {
  document.body.style.backgroundColor = `hsl(${currentHue}, 50%, 25%)`

  log('info', `🖍 Background value: ${document.body.style.backgroundColor}`)
}

const renderBackground = () =>
  getCurrentSecond()
    .then(getCurrentHue)
    .then(updateBackgroundColor)

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
