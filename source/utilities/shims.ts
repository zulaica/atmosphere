  /*
  * ----------------------------------------------------------------------------
  * Microphone and Camera Access
  * ----------------------------------------------------------------------------
  */
/// <reference types="webrtc" />
export function getUserMedia(constraints: MediaStreamConstraints) {
  if (!navigator.mediaDevices) {
    console.log('🚫 No mediaDevices support.')

    navigator.mediaDevices = <MediaDevices>{}
  }

  if(!navigator.mediaDevices.getUserMedia) {
    console.log('🚫 No getUserMedia support.')

    const getUserMedia = navigator.getUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.webkitGetUserMedia

    if(navigator.webkitGetUserMedia) {
      console.log('Legacy Chrome/Opera')
    }

    if(navigator.mozGetUserMedia) {
      console.log('Legacy Firefox')
    }

    console.log(getUserMedia)
  }

  return navigator.mediaDevices.getUserMedia(constraints)
} 
