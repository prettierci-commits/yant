<template>
  <div class="snowflakes">
    <div
      v-for="(snowflake, i) in snowflakes"
      :key="i"
      :style="snowflake.outer"
      class="snowflake"
    >
      <div :style="snowflake.inner">
        {{ snowflake.symbol }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { widgetsModule, SnowConfig } from "@/store";

interface Snowflake {
  symbol: string;
  outer: {
    left: string;

    height: string;
    width: string;
    fontSize: string;

    opacity: string;

    animationDuration: string;
    animationDelay: string;
  };
  inner: {
    animationDuration: string;
    animationDelay: string;
  };
}

interface Duration {
  variable: number;
  base: number;
  total: number;
}

@Component
export default class SnowView extends Vue {
  @Prop({ required: true })
  widgetId!: number;

  get config(): SnowConfig {
    return widgetsModule.configs[this.widgetId] as SnowConfig;
  }

  get fallDuration(): Duration {
    const variable = 10;
    const base = 3600 / this.config.speed - variable;
    const total = variable + base;

    return { variable, base, total };
  }

  get snowflakes(): Snowflake[] {
    return [...Array(this.config.amount)].map(
      (_, i): Snowflake => {
        const size = `${Math.floor(Math.random() * 10 + 15)}px`;
        return {
          symbol: this.config.symbols[i % this.config.symbols.length],
          outer: {
            left: `${Math.random() * 100}%`,

            width: size,
            height: size,
            fontSize: size,

            opacity: `${Math.random() / 2 + 0.5}`,

            animationDuration: `${Math.random() * this.fallDuration.variable +
              this.fallDuration.base}s`,
            animationDelay: `${-Math.random() * this.fallDuration.total}s`
          },
          inner: {
            animationDuration: `${Math.random() * 2 + 30}s`,
            animationDelay: `${-Math.random() * 32}s`
          }
        };
      }
    );
  }
}
</script>

<style scoped>
.snowflakes {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  pointer-events: none;
}

.snowflake {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;

  animation-name: snowflake-vertical;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.snowflake > :first-child {
  width: 100%;
  height: 100%;

  animation-name: snowflake-horizontal;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
}

@keyframes snowflake-horizontal {
  from,
  to {
    transform: translateX(-200%);
  }
  50% {
    transform: translateX(200%);
  }
}
@keyframes snowflake-vertical {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100vh);
  }
}
</style>
