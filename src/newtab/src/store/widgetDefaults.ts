import {
  ClockConfig,
  DateConfig,
  DateUpdateRate,
  MottoConfig,
  SeparatorConfig,
  SnowConfig,
  WidgetType
} from './types'

export const defaultWidgetConfigs: {
  [WidgetType.clock]: ClockConfig
  [WidgetType.date]: DateConfig
  [WidgetType.motto]: MottoConfig
  [WidgetType.separator]: SeparatorConfig
  [WidgetType.snow]: SnowConfig
  'alternative.date-week': DateConfig
} = {
  clock: {
    type: WidgetType.clock,
    styling: {
      fontScale: 9
    },
    separator: ':',
    showSeconds: true,
    dimSeconds: true,
    dimSeparators: true
  },
  date: {
    type: WidgetType.date,
    styling: {
      fontScale: 2.5
    },
    formatString: 'dddd, MMMM D, YYYY',
    updateRate: DateUpdateRate.Days
  },
  'alternative.date-week': {
    type: WidgetType.date,
    styling: {
      fontScale: 2
    },
    formatString: '[Week] W',
    updateRate: DateUpdateRate.Days
  },
  motto: {
    type: WidgetType.motto,
    styling: {
      fontScale: 1.5
    },
    text: '<strong>So what are you waiting for?</strong>\nLive your life in a way that makes traveling light years just to hang out with you worth it.'
  },
  separator: {
    type: WidgetType.separator,
    styling: {
      minHeight: 40,
      flexGrow: 1
    }
  },
  snow: {
    type: WidgetType.snow,
    styling: {},
    amount: 200,
    symbols: ['❅', '❄', '❆'],
    speed: 60
  }
}
