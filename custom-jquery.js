const $ = (...args) => {
  if (typeof args[0] === 'function') {
    // DOCUMENT ready listenner
    const readyFn = args[0]
    document.addEventListener('DOMContentLoaded', readyFn)
  } else if (typeof args[0] === 'string') {
    // select an element
    const selector = args[0]
    const collection = document.querySelectorAll(selector)
    collection.css = (...cssArgs) => {
      if (typeof cssArgs[0] === 'string') {
        const [property, value] = cssArgs
        collection.forEach((element) => {
          element.style[property] = value
        })
      }
    }
    return collection
  }
}
