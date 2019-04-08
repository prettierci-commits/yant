import { plan } from './Planner'

export type callback = (timestamp: number) => void
export type getNextDate = (date: Date) => Date

function nextDay (date: Date): Date {
  date.setTime(Date.now())
  date.setHours(24, 0, 0, 0)
  return date
}
function nextHour (date: Date): Date {
  date.setTime(Date.now())
  date.setMinutes(60, 0, 0)
  return date
}
function nextMinute (date: Date): Date {
  date.setTime(Date.now())
  date.setSeconds(60, 0)
  return date
}
function nextSecond (date: Date): Date {
  date.setTime(Date.now())
  date.setMilliseconds(1000)
  return date
}
function nextDecisecond (date: Date): Date {
  date.setTime(Date.now())
  date.setMilliseconds(Math.floor(date.getMilliseconds() / 100 + 1) * 100)
  return date
}
function nextCentisecond (date: Date): Date {
  date.setTime(Date.now())
  date.setMilliseconds(Math.floor(date.getMilliseconds() / 10 + 1) * 10)
  return date
}
function nextMillisecond (date: Date): Date {
  date.setTime(Date.now())
  date.setMilliseconds(date.getMilliseconds() + 1)
  return date
}

const next: {
  [key: string]: getNextDate
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
  private callback: callback
  private clearTimeout = (): void => {}
  private date: Date = new Date()
  private getNextDate: getNextDate

  public constructor (
    callback: callback,
    getNextDate: getNextDate = nextDay
  ) {
    this.callback = callback
    this.getNextDate = getNextDate
  }

  private setTimeout (): void {
    this.date = this.getNextDate(this.date)
    const timestamp = +this.date
    this.clearTimeout = plan((): void => {
      this.callback(timestamp)
      this.setTimeout()
    }, timestamp)
  }
  public start (getNextDate?: getNextDate): void {
    this.stop()
    if (getNextDate) {
      this.getNextDate = getNextDate
    }
    this.setTimeout()
  }
  public stop (): void {
    this.clearTimeout()
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
