import errorHandler from './utilities/error-handler'
import './utilities/event-listener'
import getUserMedia from './utilities/get-user-media'
import log from './utilities/logger'
import renderVisualizer from './visualizers/default'

const constraints = {
  audio: true,
  video: false
}

const handleError = (error: string | Error) =>
  errorHandler(error)

const handleSuccess = () => {
  log('info', `🎤 Microphone access enabled.`)
  renderVisualizer()
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
