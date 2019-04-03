type unit = {
  timestamp: number
  func: () => void
}

export default class Planner {
  private precision: number
  private interval: number | null = null
  private queue: unit[] = []

  constructor (precision: number = 1000) {
    this.precision = precision
  }

  private start () {
    this.stop()
    this.interval = window.setInterval(() => {
      const now = Date.now()
      const scheduleTimestamp = now + this.precision

      while (
        this.queue.length &&
        this.queue[this.queue.length - 1].timestamp <= scheduleTimestamp
      ) {
        const unit = this.queue.pop()!
        window.setTimeout(unit.func, unit.timestamp - now)
      }

      if (!this.queue.length) {
        this.stop()
      }
    }, this.precision)
  }
  private stop () {
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

  plan (func: () => void, timestamp: number): () => void {
    const delay = timestamp - Date.now()
    if (delay <= this.precision) {
      window.setTimeout(func, delay)
      return () => {}
    }

    const unit = { timestamp, func }

    if (this.queue.length) {
      const nextUnitIndex = this.queue.findIndex(unit => unit.timestamp < timestamp)
      this.queue.splice(
        nextUnitIndex < 0 ? this.queue.length : nextUnitIndex,
        0,
        unit
      )
    } else {
      this.queue.push(unit)
      this.start()
    }

    return this.generateRemoveFunction(unit)
  }
}

const planner = new Planner()
const plan = (func: () => void, timestamp: number) => planner.plan(func, timestamp)
export { plan }
