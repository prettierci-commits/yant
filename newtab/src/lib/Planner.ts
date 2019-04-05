type unit = {
  readonly func: () => void
  readonly repeat?: number

  timestamp: number
}

export default class Planner {
  private readonly precision: number
  private readonly queue: unit[] = []

  private interval: number | null = null
  private removeVisibilityChangeListener: () => void = () => {}

  constructor (precision: number = 1000) {
    this.precision = precision
  }

  private start () {
    this.stop()

    const listener = () => {
      if (document.hidden) {
        this.pause()
      } else {
        this.resume()
      }
    }
    document.addEventListener('visibilitychange', listener)
    this.removeVisibilityChangeListener =
      () => document.removeEventListener('visibilitychange', listener)

    this.resume()
  }
  private stop () {
    this.pause()
    this.removeVisibilityChangeListener()
  }

  private resume () {
    this.pause()

    this.interval = window.setInterval(() => {
      const now = Date.now()
      const scheduleTimestamp = now + this.precision

      while (
        this.queue.length &&
        this.queue[this.queue.length - 1].timestamp <= scheduleTimestamp
      ) {
        const unit = this.queue.pop()!
        if (unit.repeat != null) {
          do {
            unit.timestamp += unit.repeat
          } while (unit.timestamp < now)
          this.planUnit(unit)
        }
        window.setTimeout(unit.func, unit.timestamp - now)
      }

      if (!this.queue.length) {
        this.stop()
      }
    }, this.precision)
  }
  private pause () {
    if (this.interval != null) {
      window.clearInterval(this.interval)
      this.interval = null
    }
  }

  private generateRemoveFunction (unit: unit) {
    return () => {
      const index = this.queue.indexOf(unit)
      if (index >= 0) {
        this.queue.splice(index, 1)
      }
    }
  }
  private planUnit (unit: unit) {
    const nextUnitIndex = this.queue.findIndex(({ timestamp }) => timestamp < unit.timestamp)
    this.queue.splice(
      nextUnitIndex < 0 ? this.queue.length : nextUnitIndex,
      0,
      unit
    )
  }

  plan (func: () => void, timestamp: number, repeat?: number): () => void {
    const unit = { timestamp, func, repeat }

    this.planUnit(unit)

    if (this.interval == null) {
      this.start()
    }

    return this.generateRemoveFunction(unit)
  }
}

const planner = new Planner()
const plan = (func: () => void, timestamp: number, repeat?: number) =>
  planner.plan(func, timestamp, repeat)
export { plan }
