const $ = (...args) => {
  if (typeof args[0] === 'function') {
    // DOCUMENT ready listenner
    const readyFn = args[0]
    document.addEventListener('DOMContentLoaded', readyFn)
  } else if (typeof args[0] === 'string') {
    // select an element
    const selector = args[0]
    const collection = document.querySelectorAll(selector)
    // css method
    collection.css = (...cssArgs) => {
      if (typeof cssArgs[0] === 'string') {
        const [property, value] = cssArgs
        collection.forEach((element) => {
          element.style[property] = value
        })
      } else if (typeof cssArgs[0] === 'object') {
        collection.forEach((element) => {
          Object.entries(cssArgs[0]).forEach(([property, value]) => {
            element.style[property] = value
          })
        })
      }
    }

    // text method
    collection.text = (...textArgs) => {
      if (typeof textArgs[0] === 'string') {
        const [value] = textArgs
        if (value) {
          collection[0].textContent = value
          return value
        }
      }
      return collection[0].textContent
    }
    return collection
  }
}
