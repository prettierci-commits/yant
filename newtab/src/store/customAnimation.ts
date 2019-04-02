import { animationColors } from './types'

let id = 0

function toPrcStr (fraction: number) {
  return `${(fraction * 100).toFixed(6)}%`
}

export function generateAnimation (animationColors: animationColors[], animationDuration: number = 60) {
  ++id
  if (!animationColors.length) {
    return {
      animation: '',
      css: ''
    }
  }

  const animationDelay = -Math.floor(animationDuration * Math.random())

  const fgTransitionDuration = 2 / animationDuration
  const halfStepOffset = 1 / 2 / animationColors.length
  const fgTransitionOffset = Math.min(fgTransitionDuration, halfStepOffset / 2)

  const keyframes = ([] as string[]).concat(
    ...animationColors.map((curr, i, arr) => {
      const prev = arr[i - 1] || {}
      const offset = i / arr.length

      if (!prev.fg) {
        return [
          `from, to { background-color: ${curr.bg}; color: ${curr.fg}; }`
        ]
      } else if (curr.fg === prev.fg) {
        return [
          `${toPrcStr(offset)} { background-color: ${curr.bg}; }`
        ]
      } else {
        return [
          `${toPrcStr(offset - halfStepOffset - fgTransitionOffset)} { color: ${prev.fg}; }`,
          `${toPrcStr(offset - halfStepOffset + fgTransitionOffset)} { color: ${curr.fg}; }`,
          `${toPrcStr(offset)} { background-color: ${curr.bg}; }`
        ]
      }
    })
  )
  const keyframesStr = keyframes.map(line => `  ${line}`).join('\n')

  return {
    animation: `custom-color-keyframes-${id} ${animationDuration}s infinite ${animationDelay}s linear`,
    css: `@keyframes custom-color-keyframes-${id} {\n${keyframesStr}\n}`
  }
}
