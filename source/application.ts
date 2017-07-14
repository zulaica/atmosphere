import * as CONST from './constants'
import errorHandler from './utilities/error-handler'
import './utilities/event-listener'
import getUserMedia from './utilities/get-user-media'
import log from './utilities/logger'
import renderVisualizer from './visualizers/default'

const handleError = (error: string | Error) =>
  errorHandler(error)

const handleSuccess = () =>
  log('info', `🎤 Microphone access enabled.`)
    .then(renderVisualizer)

const logContactInfo = () =>
  log('info', CONST.CONTACT_INFO)

const application = () =>
  getUserMedia(CONST.CONSTRAINTS)
    .then(handleSuccess)
    .catch(handleError)

document.on('DOMContentLoaded', logContactInfo)
window.on('load', application)
