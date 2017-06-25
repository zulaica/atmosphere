import { getUserMedia } from './utilities/shims'
import { formatError } from './utilities/error-handling'

const constraints = {
  audio: true,
  video: false
}

const handleError = (error: string | Error) =>
  formatError(error)

const handleSuccess = () =>
  console.info('🎤 Microphone access enabled.')

const application = () => {
  getUserMedia(constraints)
    .then(handleSuccess)
    .catch(handleError)

  const currentSecondPoller = new Poller
  currentSecondPoller.start(getCurrentSecond, 1000)
  setTimeout(currentSecondPoller.stop, 10000)
}

const getCurrentSecond = () => {
  const currentTime = new Date()
  console.log('asdf')
  return Promise.resolve(
    (currentTime.getHours() * 3600) +
    (currentTime.getMinutes() * 60) +
    currentTime.getSeconds()
  )
}

class Poller {
  intervalId: number
  start = (fn: Function, duration: number) => {
    if (!this.intervalId) {
      this.intervalId = setInterval(fn, duration)
    }
  }
  stop = () => {
    clearInterval(this.intervalId)
    this.intervalId = -1
  }
}

window.addEventListener('load', application, false)
