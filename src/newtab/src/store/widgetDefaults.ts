import {
  ClockConfig,
  DateConfig,
  DateUpdateRate,
  MottoConfig,
  SeparatorConfig,
  SnowConfig
} from './types'

export const defaultWidgetConfigs: {
  clock: ClockConfig
  date: DateConfig
  motto: MottoConfig
  separator: SeparatorConfig
  snow: SnowConfig
} = {
  clock: {
    styling: {
      fontScale: 9
    },
    separator: ':',
    showSeconds: true,
    dimSeconds: true,
    dimSeparators: true
  },
  date: {
    styling: {
      fontScale: 2.5
    },
    formatString: 'dddd, MMMM D, YYYY',
    updateRate: DateUpdateRate.Days
  },
  motto: {
    styling: {
      fontScale: 1.5
    },
    text: '<strong>So what are you waiting for?</strong>\nLive your life in a way that makes traveling light years just to hang out with you worth it.'
  },
  separator: {
    styling: {
      height: 40
    },
    flexGrow: 1
  },
  snow: {
    amount: 200,
    symbols: ['❅', '❄', '❆'],
    speed: 60
  }
}
