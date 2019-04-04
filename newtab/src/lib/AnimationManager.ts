import { animationColors } from '@/store'

type keyframe = {
  offset: number
  backgroundColor?: string
  color?: string
}

function prepareKeyframes (colors: animationColors[], duration: number) {
  if (colors.length < 1) {
    return []
  }

  const fgTransitionDuration = 2000 / duration
  const halfStepOffset = 1 / colors.length / 2
  const fgTransitionOffset = Math.min(fgTransitionDuration, halfStepOffset / 2)

  const keyframes: keyframe[] = []

  const firstAndLastKeyframe = {
    backgroundColor: colors[0].bg,
    color: colors[0].fg
  }

  keyframes.push({ ...firstAndLastKeyframe, offset: 0 })
  for (let i = 1; i < colors.length; ++i) {
    const curr = colors[i]
    const prev = colors[i - 1]
    const offset = i / colors.length

    if (curr.fg === prev.fg) {
      keyframes.push({
        offset,
        backgroundColor: curr.bg
      })
    } else {
      keyframes.push({
        offset: offset - halfStepOffset - fgTransitionOffset,
        color: prev.fg
      }, {
        offset: offset - halfStepOffset + fgTransitionOffset,
        color: curr.fg
      }, {
        offset,
        backgroundColor: curr.bg
      })
    }
  }
  keyframes.push({ ...firstAndLastKeyframe, offset: 1 })

  return keyframes
}

function computeLastStart (duration: number, now: number = Date.now()): number {
  return Math.floor(now / duration) * duration
}

export type options = {
  colors?: animationColors[]
  delay?: number
  duration?: number
  start?: number
  sync?: boolean
}

export default class AnimationManager {
  private delay: number
  private duration: number
  private element: HTMLElement
  private keyframes: keyframe[]
  private startTimestamp: number
  private sync: boolean

  private animation: Animation | undefined
  private interval: number | undefined

  constructor (element: HTMLElement, options: options = {}) {
    this.element = element

    this.delay = options.delay != null ? options.delay : 0
    this.duration = options.duration != null ? options.duration : 60000
    this.startTimestamp = options.start != null
      ? options.start
      : Math.floor(this.duration * Math.random())
    this.sync = options.sync != null
      ? options.sync
      : options.start != null

    this.keyframes = prepareKeyframes(
      options.colors != null ? options.colors : [],
      this.duration
    )
  }

  start () {
    this.stop()

    const animation = this.element.animate(this.keyframes, {
      duration: this.duration,
      iterations: Number.POSITIVE_INFINITY
    })
    animation.currentTime = Date.now() - this.startTimestamp
    this.animation = animation

    if (this.sync) {
      this.interval = window.setInterval(() => {
        const now = Date.now()

        const expected = now - this.startTimestamp
        const actual = animation.currentTime || 0

        const diff = expected - actual
        const absDiff = Math.abs(diff)

        if (animation.playbackRate === 1 && absDiff < 100) {
          // acceptable
        } else if (absDiff > 1000) {
          animation.playbackRate = 1
          animation.currentTime = expected
        } else if (animation.playbackRate !== 1 && absDiff < 10) {
          animation.playbackRate = 1
        } else if (diff < 0) {
          if (animation.playbackRate !== 0.999) {
            animation.playbackRate = 0.999
          }
        } else if (diff > 0) {
          if (animation.playbackRate !== 1.001) {
            animation.playbackRate = 1.001
          }
        }
      }, 5000)
    }
  }
  stop () {
    if (this.interval != null) {
      window.clearInterval(this.interval)
      this.interval = undefined
    }

    if (this.animation != null) {
      this.animation.cancel()
      this.animation = undefined
    }
  }
}
