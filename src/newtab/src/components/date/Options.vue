<template>
  <v-container grid-list-md>
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <v-text-field
          v-model="formatString"
          clearable
          label="Format"
        />
      </v-flex>
      <v-flex xs12>
        <v-autocomplete
          :items="formatStringItems"
          label="Append to format"
          @change="v => formatString += v"
        />
      </v-flex>

      <v-flex xs12>
        <Styling v-model="styling" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Styling from "@/components/options/Styling.vue";
import formatDate from "date-fns/format";
import { Component, Vue, Prop } from "vue-property-decorator";
import {
  widgetsModule,
  DateConfig,
  StylingConfig,
  DateUpdateRate
} from "@/store";

@Component({
  components: {
    Styling
  }
})
export default class DateOptions extends Vue {
  @Prop({ required: true })
  widgetId!: number;

  get config(): DateConfig {
    return (widgetsModule.configs[this.widgetId] as DateConfig) as DateConfig;
  }
  setConfig(config: Partial<DateConfig>): void {
    widgetsModule.setConfig({
      id: this.widgetId,
      config: {
        ...this.config,
        ...config
      }
    });
  }

  get styling(): StylingConfig {
    return this.config.styling;
  }
  set styling(v: StylingConfig) {
    this.setConfig({ styling: v });
  }

  get formatString(): string {
    return this.config.formatString;
  }
  set formatString(vRaw: string) {
    const v = vRaw || " ";
    this.setConfig({
      formatString: v,
      updateRate: this.computeUpdateRate(v)
    });
  }
  get formatStringItems(): { text: string; value: string }[] {
    return [
      {
        text: "Date and time",
        value: "dddd, MMMM D, YYYY - HH:mm:ss"
      },
      {
        text: "Date",
        value: "dddd, MMMM D, YYYY"
      },
      {
        text: "Date",
        value: "YYYY/MM/DD"
      },
      {
        text: "Date",
        value: "D. M. YYYY"
      },
      {
        text: "Time",
        value: "H:mm"
      },
      {
        text: "Time",
        value: "HH:mm"
      },
      {
        text: "Time",
        value: "H:mm:ss"
      },
      {
        text: "Time",
        value: "HH:mm:ss"
      },
      {
        text: "Week",
        value: "[Week] W"
      },
      {
        text: "Month",
        value: "M"
      },
      {
        text: "Month",
        value: "Mo"
      },
      {
        text: "Month",
        value: "MM"
      },
      {
        text: "Month",
        value: "MMM"
      },
      {
        text: "Month",
        value: "MMMM"
      },
      {
        text: "Quarter",
        value: "Q"
      },
      {
        text: "Quarter",
        value: "Qo"
      },
      {
        text: "Day of month",
        value: "D"
      },
      {
        text: "Day of month",
        value: "Do"
      },
      {
        text: "Day of month",
        value: "DD"
      },
      {
        text: "Day of year",
        value: "DDD"
      },
      {
        text: "Day of year",
        value: "DDDo"
      },
      {
        text: "Day of year",
        value: "DDDD"
      },
      {
        text: "Day of week",
        value: "d"
      },
      {
        text: "Day of week",
        value: "do"
      },
      {
        text: "Day of week",
        value: "dd"
      },
      {
        text: "Day of week",
        value: "ddd"
      },
      {
        text: "Day of week",
        value: "dddd"
      },
      {
        text: "Day of ISO week",
        value: "E"
      },
      {
        text: "ISO week",
        value: "W"
      },
      {
        text: "ISO week",
        value: "Wo"
      },
      {
        text: "ISO week",
        value: "WW"
      },
      {
        text: "Year",
        value: "YY"
      },
      {
        text: "Year",
        value: "YYYY"
      },
      {
        text: "ISO week-numbering year",
        value: "GG"
      },
      {
        text: "ISO week-numbering year",
        value: "GGGG"
      },
      {
        text: "AM/PM",
        value: "A"
      },
      {
        text: "AM/PM",
        value: "a"
      },
      {
        text: "AM/PM",
        value: "aa"
      },
      {
        text: "Hour",
        value: "H"
      },
      {
        text: "Hour",
        value: "HH"
      },
      {
        text: "Hour",
        value: "h"
      },
      {
        text: "Hour",
        value: "hh"
      },
      {
        text: "Minute",
        value: "m"
      },
      {
        text: "Minute",
        value: "mm"
      },
      {
        text: "Second",
        value: "s"
      },
      {
        text: "Second",
        value: "ss"
      },
      {
        text: "1/10 of second",
        value: "S"
      },
      {
        text: "1/100 of second",
        value: "SS"
      },
      {
        text: "Millisecond",
        value: "SSS"
      },
      {
        text: "Timezone",
        value: "Z"
      },
      {
        text: "Timezone",
        value: "ZZ"
      },
      {
        text: "Seconds timestamp",
        value: "X"
      },
      {
        text: "Milliseconds timestamp",
        value: "x"
      }
    ].map(({ text, value }) => ({
      text: `${text}: ${formatDate(1111, value)}`,
      value
    }));
  }

  computeUpdateRate(format: string): DateUpdateRate {
    const d1 = new Date(0);
    const d2 = new Date(d1);

    function doDateStringsDiffer() {
      return formatDate(d1, format) !== formatDate(d2, format);
    }

    d2.setMilliseconds(9);
    if (doDateStringsDiffer()) {
      return DateUpdateRate.Milliseconds;
    }

    d2.setMilliseconds(99);
    if (doDateStringsDiffer()) {
      return DateUpdateRate.Centiseconds;
    }

    d2.setMilliseconds(999);
    if (doDateStringsDiffer()) {
      return DateUpdateRate.Deciseconds;
    }

    d2.setSeconds(59);
    if (doDateStringsDiffer()) {
      return DateUpdateRate.Seconds;
    }

    d2.setMinutes(59);
    if (doDateStringsDiffer()) {
      return DateUpdateRate.Minutes;
    }

    d2.setHours(23);
    if (doDateStringsDiffer()) {
      return DateUpdateRate.Hours;
    }

    return DateUpdateRate.Days;
  }
}
</script>

<style scoped>
</style>
