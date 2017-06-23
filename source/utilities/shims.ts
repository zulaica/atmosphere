/// <reference types="webrtc" />
  /*
  * ----------------------------------------------------------------------------
  * Microphone and Camera Access
  * ----------------------------------------------------------------------------
  */
export function getUserMedia(constraints: MediaStreamConstraints) {
  if (!navigator.mediaDevices) {
    console.log('🚫 no media devices')
    navigator.mediaDevices = <MediaDevices>{}
  }

  return navigator.mediaDevices.getUserMedia(constraints)
} 
