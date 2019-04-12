export type Executor = (func: Function) => void

export function simplyExecute (func: Function): void {
  func()
}

export function executeWithDelay (ms: number): Executor {
  let timeout: number | null = null

  function onBeforeunload (e: BeforeUnloadEvent): void {
    e.preventDefault() // Cancel the event
    e.returnValue = '' // Chrome requires returnValue to be set
  }

  return function (func: Function): void {
    if (timeout == null) {
      // Starting a new timeout
      window.addEventListener('beforeunload', onBeforeunload)
    } else {
      // Replacing existing timeout
      window.clearTimeout(timeout)
    }

    timeout = window.setTimeout((): void => {
      func()
      timeout = null
      window.removeEventListener('beforeunload', onBeforeunload)
    }, ms)
  }
}
