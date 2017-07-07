  // tslint:disable
  /*
   * ---------------------------------------------------------------------------
   * Microphone and Camera Access
   * ---------------------------------------------------------------------------
   * Basic shim ported from MDN example
   * https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#Using_the_new_API_in_older_browsers
   */
  // tslint:enable
/// <reference types="webrtc" />
const getUserMedia = (constraints: MediaStreamConstraints) => {
  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {} as MediaDevices
  }

  if (!navigator.mediaDevices.getUserMedia) {
    const legacyGetUserMedia = navigator.getUserMedia ||
                               navigator.mozGetUserMedia ||
                               navigator.webkitGetUserMedia

    if (!legacyGetUserMedia) {
      return Promise.reject(new Error('😢 Your browser is not supported.'))
    }

    return new Promise((resolve, reject) => {
      legacyGetUserMedia.call(navigator, constraints, resolve, reject)
    })
  }

  return navigator.mediaDevices.getUserMedia(constraints)
}

export default getUserMedia
