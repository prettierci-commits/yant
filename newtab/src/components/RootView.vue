<template>
  <div
    :class="classes"
    :style="styleAttr"
    class="flex-container"
  >
    <div
      :is="component"
      v-for="({ component, id }, i) in widgetsDOM"
      :key="i"
      :widget-id="id"
      class="widget"
    />

    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { commonModule } from '@/store'
import { widgetMap } from '@/options/widgetMetadata'

import ClockView from '@/components/clock/View.vue'
import DateView from '@/components/date/View.vue'
import MottoView from '@/components/motto/View.vue'
import SeparatorView from '@/components/separator/View.vue'

@Component({
  components: {
    ClockView,
    DateView,
    MottoView,
    SeparatorView
  }
})
export default class RootView extends Vue {
  @Prop({ default: false })
  shrink!: boolean

  @Prop({ required: true })
  widgets!: {
    type: string
    id: number
  }[]

  styleElement = document.createElement('style')

  get styleAttrVars () {
    return {
      '--color-transition-delay': `${-Math.floor(Math.random() * 600)}s`
    }
  }
  get styleAttr () {
    return {
      ...commonModule.styleAttr,
      ...this.styleAttrVars
    }
  }

  get style (): string {
    return commonModule.style
  }

  get widgetsDOM () {
    return this.widgets.map(({ type, id }) => ({
      component: widgetMap.get(type)!.componentName,
      id
    }))
  }

  get classes () {
    return {
      shrink: this.shrink !== false,
      'newtab-colors': (
        !commonModule.styling.backgroundColor &&
        !commonModule.styling.color
      ),
      [commonModule.fadeIn ? 'fade-in' : 'show-immediatelly']: true
    }
  }

  @Watch('style')
  updateStyle () {
    this.styleElement.innerHTML = this.style
  }

  mounted () {
    this.updateStyle()
    document.body.appendChild(this.styleElement)
  }

  beforeDestroy () {
    this.styleElement!.parentNode!.removeChild(this.styleElement)
  }
}
</script>

<style scoped>
.flex-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  opacity: 0;
}
.flex-container:not(.shrink) {
  min-height: 100vh;
}

.flex-container > .widget {
  overflow: hidden;
}

.show-immediatelly {
  opacity: 1;
}
.fade-in {
  animation: fade-in 2s forwards;
}

.fade-in.newtab-colors {
  animation:
    fade-in 2s forwards,
    color-transition 600s infinite var(--color-transition-delay) linear;
}

.newtab-colors {
  --color-transition-delay: 0s;
  animation: color-transition 600s infinite var(--color-transition-delay) linear;
}

@keyframes fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes color-transition {
  from, to { background-color: #ffffff; color: #000000; }
      2.4% {                            color: #000000; }
      2.6% {                            color: #ffffff; }
      5.0% { background-color: #000000;                 }
     10.0% { background-color: #f44336;                 }
     15.0% { background-color: #e91e63;                 }
     20.0% { background-color: #9c27b0;                 }
     25.0% { background-color: #673ab7;                 }
     30.0% { background-color: #3f51b5;                 }
     32.4% {                            color: #ffffff; }
     32.6% {                            color: #000000; }
     35.0% { background-color: #2196f3;                 }
     40.0% { background-color: #03a9f4;                 }
     45.0% { background-color: #00bcd4;                 }
     47.4% {                            color: #000000; }
     47.6% {                            color: #ffffff; }
     50.0% { background-color: #009688;                 }
     52.4% {                            color: #ffffff; }
     52.6% {                            color: #000000; }
     55.0% { background-color: #4caf50;                 }
     60.0% { background-color: #8bc34a;                 }
     65.0% { background-color: #cddc39;                 }
     70.0% { background-color: #ffeb3b;                 }
     75.0% { background-color: #ffc107;                 }
     80.0% { background-color: #ff9800;                 }
     85.0% { background-color: #ff5722;                 }
     87.4% {                            color: #000000; }
     87.6% {                            color: #ffffff; }
     90.0% { background-color: #795548;                 }
     95.0% { background-color: #607d8b;                 }
     97.4% {                            color: #ffffff; }
     97.6% {                            color: #000000; }
}
</style>
