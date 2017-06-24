  /*
  * ----------------------------------------------------------------------------
  * Microphone and Camera Access
  * ----------------------------------------------------------------------------
  * Basic shim ported from MDN example
  * https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#Using_the_new_API_in_older_browsers
  */
/// <reference types="webrtc" />
export const getUserMedia = (constraints: MediaStreamConstraints) => {
  if (!navigator.mediaDevices) {
    navigator.mediaDevices = <MediaDevices>{}
  }

  if(!navigator.mediaDevices.getUserMedia) {
    const getUserMedia = navigator.getUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.webkitGetUserMedia

    if (!getUserMedia) {
      return Promise.reject(new Error('😢 Your browser is not supported.'))
    }

    return new Promise((resolve, reject) => {
      getUserMedia.call(navigator, constraints, resolve, reject)
    })
  }

  return navigator.mediaDevices.getUserMedia(constraints)
} 
