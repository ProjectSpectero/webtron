import { session } from 'electron'

export default {
  // Appends the user agent header on every request
  appendUserAgentHeader () {
    session.defaultSession.webRequest.onBeforeSendHeaders({
      urls: [
        'http://*/*',
        'https://*/*'
      ]
    }, (details, callback) => {
      details.requestHeaders['User-Agent'] = 'Spectero Desktop'

      // eslint-disable-next-line
      callback({ cancel: false, requestHeaders: details.requestHeaders })
    }, (error) => {
      if (error) {
        console.error('Failed to append HTTP header', error)
      }
    })
  }
}
