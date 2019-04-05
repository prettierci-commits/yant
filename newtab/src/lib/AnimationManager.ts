import { animationColors } from '@/store'
import { plan } from '@/lib/Planner'

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
  readonly colors?: animationColors[]
  readonly delay?: number
  readonly duration?: number
  readonly start?: number
  readonly sync?: boolean
}

export default class AnimationManager {
  private readonly delay: number
  private readonly duration: number
  private readonly element: HTMLElement
  private readonly keyframes: keyframe[]
  private readonly startTimestamp: number
  private readonly sync: boolean

  private animation: Animation | undefined
  private cancelPlan: () => void = () => {}

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
      this.cancelPlan = plan(() => {
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
      }, Date.now(), 5000)
    }
  }
  stop () {
    this.cancelPlan()

    if (this.animation != null) {
      this.animation.cancel()
      this.animation = undefined
    }
  }
}
