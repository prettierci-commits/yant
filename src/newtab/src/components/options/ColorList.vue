<template>
  <div class="color-tile-grid">
    <div class="header" />
    <div class="header">
      Font
    </div>
    <div class="header">
      Background
    </div>
    <div class="header" />

    <template
      v-for="({ fg, bg, fgHint }, i) in colors"
    >
      <div
        :key="`index-${i}`"
        class="index"
      >
        {{ i + 1 }}
      </div>

      <ColorTileWithHint
        :key="`fg-${i}`"
        :hint="fgHint"
        :value="fg"
        class="tile"
        title="Foreground"
        @input="v => emitInput(i, 'fg', v)"
      />

      <ColorTile
        :key="`bg-${i}`"
        :value="bg"
        class="tile"
        title="Background"
        @input="v => emitInput(i, 'bg', v)"
      />

      <div
        :key="`label-${i}`"
        :title="labels[i].title"
        class="label"
      >
        {{ labels[i].text }}
      </div>
    </template>

    <div class="footer">
      <v-btn
        icon
        @click="add"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn
        icon
        @click="remove"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import ColorTile from "./ColorTile.vue";
import ColorTileWithHint from "./ColorTileWithHint.vue";
import vuetifyColors from "vuetify/es5/util/colors";
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

type value = {
  fg: string;
  bg: string;
}[];

@Component({
  components: {
    ColorTile,
    ColorTileWithHint
  }
})
export default class ColorList extends Vue {
  @Prop({ required: true })
  value!: value;

  @Prop({ default: () => [] })
  labels!: {
    text: string;
    title: string;
  }[];

  get colors(): {
    fg: string;
    bg: string;
    fgHint: string;
  }[] {
    return this.value.map(({ fg, bg }) => ({
      fg,
      bg,
      fgHint: this.getFgHint(bg)
    }));
  }

  getFgHint(bg: string): string {
    return this.isColorLight(bg) ? "#000000" : "#ffffff";
  }

  isColorLight(hexColor: string): boolean {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    return hsp > 127.5;
  }

  get colorPool(): string[] {
    return Object.values(vuetifyColors)
      .map(v => Object.values(v) as string[])
      .flat(1);
  }

  @Emit("input")
  add(): value {
    const bg = this.colorPool[
      Math.floor(this.colorPool.length * Math.random())
    ];
    const fg = this.getFgHint(bg);

    return [...this.value, { fg, bg }];
  }

  @Emit("input")
  remove(): value {
    return this.value.slice(0, -1);
  }

  @Emit("input")
  emitInput(index: number, property: string, color: string): value {
    return [
      ...this.value.slice(0, index),
      { ...this.value[index], [property]: color },
      ...this.value.slice(index + 1)
    ];
  }
}
</script>

<style scoped>
.color-tile-grid {
  align-items: center;
  display: grid;
  grid-template-columns: 0fr 1fr 1fr 0fr;
  justify-items: stretch;
}
.color-tile-grid > .tile {
  min-height: 2em;
}

.heading-container {
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 0;
  justify-content: space-around;
  margin-right: 1ex;
}

.footer {
  grid-column: 1 / span 4;
}
.header,
.footer {
  text-align: center;
}
.index {
  font-variant-numeric: tabular-nums;
  text-align: right;
}
.label {
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.header,
.label,
.index {
  padding: 0px 1ex;
}
</style>
