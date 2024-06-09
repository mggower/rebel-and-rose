const tagMessage = (message: string) => `[Rebel & Rose]:
  ${message}`

const logInfo = (message: string) => {
  console.info(tagMessage(message))
}

const logWarning = (message: string) => {
  console.warn(tagMessage(message))
}

const logError = (message: string) => {
  console.error(tagMessage)
}

const logger = {
  info: logInfo,
  warning: logWarning,
  error: logError,
}

export default logger
