  /*
  * ----------------------------------------------------------------------------
  * Microphone and Camera Access
  * ----------------------------------------------------------------------------
  * Basic shim ported from MDN example
  * https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#Using_the_new_API_in_older_browsers
  */
/// <reference types="webrtc" />
export function getUserMedia(constraints: MediaStreamConstraints) {
  if (!navigator.mediaDevices) {
    navigator.mediaDevices = <MediaDevices>{}
  }

  if(!navigator.mediaDevices.getUserMedia) {
    const getUserMedia = navigator.getUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.webkitGetUserMedia
    console.log(`Legacy getUserMedia support: ${!!getUserMedia}`)

    return new Promise((resolve, reject) => {
      getUserMedia.call(navigator, constraints, resolve, reject)
    })
  }

  return navigator.mediaDevices.getUserMedia(constraints)
} 
