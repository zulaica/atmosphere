import * as CONSTANTS from './constants'
import errorHandler from './utilities/error-handler'
import './utilities/event-listener'
import getUserMedia from './utilities/get-user-media'
import log from './utilities/logger'
import renderVisualizer from './visualizers/default'

const {
  CONSTRAINTS,
  CONTACT_INFO
} = CONSTANTS

const handleError = (error: string | Error) =>
  errorHandler(error)

const handleSuccess = () =>
  log(`🎤 Microphone access enabled.`, 'info')
    .then(renderVisualizer)

const logContactInfo = () =>
  log(CONTACT_INFO)

const application = () =>
  getUserMedia(CONSTRAINTS)
    .then(handleSuccess)
    .catch(handleError)

document.on('DOMContentLoaded', logContactInfo)
window.on('load', application)
