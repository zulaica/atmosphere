import errorHandler from './utilities/error-handler'
import './utilities/event-listener'
import getUserMedia from './utilities/get-user-media'
import log from './utilities/logger'
import Poller from './utilities/poller'
import renderBackground from './visualizers/default'

const constraints = {
  audio: true,
  video: false
}

const handleError = (error: string | Error) =>
  errorHandler(error)

const handleSuccess = () => {
  log('info', `🎤 Microphone access enabled.`)

  // 240 seconds is the minimum amount of time required to generate a new
  // RGB value.
  const pollAt240Seconds = new Poller(240 * 1000)

  renderBackground()
    .then(() => pollAt240Seconds.start(
      renderBackground
    ))
    .then(() => setTimeout(pollAt240Seconds.stop, 240 * 1000 * 10))
}

const logContactInfo = () =>
  log('info', `
    ▶︎ ▲ ▼ ⬆︎ ▶︎  m a d e  t h i s .

          ┌────GITHUB─────┐
            ┌────────WEBSITE────────┐
 d a v i d @ z u l a i c a . i n f o
└───────────────EMAIL───────────────┘
          └────TWITTER────┘
  `)

const application = () =>
  getUserMedia(constraints)
    .then(handleSuccess)
    .catch(handleError)

document.on('DOMContentLoaded', logContactInfo)
window.on('load', application)
