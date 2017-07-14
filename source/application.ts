import errorHandler from './utilities/error-handler'
import './utilities/event-listener'
import getUserMedia from './utilities/get-user-media'
import log from './utilities/logger'
import renderVisualizer from './visualizers/default'

const CONSTRAINTS = {
  audio: true,
  video: false
}

const CONTACT_INFO = `
    ▶︎ ▲ ▼ ⬆︎ ▶︎  m a d e  t h i s .

          ┌────GITHUB─────┐
            ┌────────WEBSITE────────┐
 d a v i d @ z u l a i c a . i n f o
└───────────────EMAIL───────────────┘
          └────TWITTER────┘
  `

const handleError = (error: string | Error) =>
  errorHandler(error)

const handleSuccess = () =>
  log('info', `🎤 Microphone access enabled.`)
    .then(renderVisualizer)

const logContactInfo = () =>
  log('info', CONTACT_INFO)

const application = () =>
  getUserMedia(CONSTRAINTS)
    .then(handleSuccess)
    .catch(handleError)

document.on('DOMContentLoaded', logContactInfo)
window.on('load', application)
