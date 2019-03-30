function nextDay (date: Date): number {
  const now = date.setTime(Date.now())
  date.setHours(24, 0, 0, 0)
  return +date - now
}
function nextHour (date: Date): number {
  const now = date.setTime(Date.now())
  date.setMinutes(60, 0, 0)
  return +date - now
}
function nextMinute (date: Date): number {
  const now = date.setTime(Date.now())
  date.setSeconds(60, 0)
  return +date - now
}
function nextSecond (date: Date): number {
  const now = date.setTime(Date.now())
  date.setMilliseconds(1000)
  return +date - now
}
function nextDecisecond (date: Date): number {
  const now = date.setTime(Date.now())
  date.setMilliseconds(Math.floor(date.getMilliseconds() / 100 + 1) * 100)
  return +date - now
}
function nextCentisecond (date: Date): number {
  const now = date.setTime(Date.now())
  date.setMilliseconds(Math.floor(date.getMilliseconds() / 10 + 1) * 10)
  return +date - now
}
function nextMillisecond (date: Date): number {
  const now = date.setTime(Date.now())
  date.setMilliseconds(date.getMilliseconds() + 1)
  return +date - now
}

const next: {
  [key: string]: (date: Date) => number
} = {
  day: nextDay,
  hour: nextHour,
  minute: nextMinute,
  second: nextSecond,
  decisecond: nextDecisecond,
  centisecond: nextCentisecond,
  millisecond: nextMillisecond
}

export default class Updater {
  private callback: (timestamp: number) => void
  private date: Date
  private setNextDateAndReturnMsToWait: (date: Date) => number
  private timeout: number | undefined

  constructor (callback: (timestamp: number) => void) {
    this.callback = callback
    this.date = new Date()
    this.setNextDateAndReturnMsToWait = nextDay
  }

  private _setTimeout () {
    this.timeout = window.setTimeout(() => {
      this._setTimeout()
      this.callback(+this.date)
    }, this.setNextDateAndReturnMsToWait(this.date))
  }
  start (setNextDateAndReturnMsToWait?: (date: Date) => number) {
    this.stop()
    if (setNextDateAndReturnMsToWait) {
      this.setNextDateAndReturnMsToWait = setNextDateAndReturnMsToWait
    }
    this._setTimeout()
  }
  stop () {
    window.clearTimeout(this.timeout)
  }
}

export {
  next,
  nextDay,
  nextHour,
  nextMinute,
  nextSecond,
  nextDecisecond,
  nextCentisecond,
  nextMillisecond
}
