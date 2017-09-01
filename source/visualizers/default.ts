import Poller from '../utilities/poller'

const TOTAL_DEGREES = 360
const HUE_OFFSET = 240 // Start the day (midnight/0) at blue.
const TOTAL_SECONDS = 86400 // Total number of seconds in a 24-hour period.

const getCurrentSecond = () => {
  const currentTime = new Date()
  const currentSecond = currentTime.getHours() * 3600 +
                        currentTime.getMinutes() * 60 +
                        currentTime.getSeconds() +
                        1 // Prevent a 0 value to allow for a simpler
                          // representation of TOTAL_DEGREES and TOTAL_SECONDS.

  return Promise.resolve(currentSecond)
}

const getCurrentHue = (currentSecond: number) => {
  const hueStep = TOTAL_DEGREES / TOTAL_SECONDS
  const currentStep = hueStep * currentSecond
  const currentHue = (HUE_OFFSET + currentStep) % TOTAL_DEGREES

  return Promise.resolve(currentHue)
}

const updateBackgroundColor = (currentHue: number) =>
  document.body.style.backgroundColor = `hsl(${currentHue}, 50%, 25%)`

const renderBackground = () =>
  getCurrentSecond()
    .then(getCurrentHue)
    .then(updateBackgroundColor)

const renderVisualizer = () => {
  // 240 seconds is the minimum amount of time required to generate a new
  // RGB value.
  const pollAt240Seconds = new Poller(240 * 1000)

  renderBackground()
    .then(() => pollAt240Seconds.start(
      renderBackground
    ))
    .then(() => setTimeout(pollAt240Seconds.stop, 240 * 1000 * 10))
}

export default renderVisualizer
