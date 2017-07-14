import log from '../utilities/logger'

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

export default renderBackground
