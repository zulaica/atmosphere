/// <reference types="webrtc" />
  /*
  * ----------------------------------------------------------------------------
  * Microphone and Camera Access
  * ----------------------------------------------------------------------------
  */
export function getUserMedia(constraints: MediaStreamConstraints) {
  return navigator.mediaDevices.getUserMedia(constraints)
} 
