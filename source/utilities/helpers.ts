export const displayStatusMessage = (type: string, status: string) => {
  const messageContainer = document.createElement('p')
  const message = document.createTextNode(status)
  messageContainer.appendChild(message)
  messageContainer.className = type

  document.body.appendChild(messageContainer)
}
