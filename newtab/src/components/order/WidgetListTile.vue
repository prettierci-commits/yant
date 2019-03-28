<template>
  <v-list-tile avatar>
    <v-list-tile-avatar>
      <v-icon>
        {{ icon }}
      </v-icon>
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title>
        {{ name }} ({{ id }})
      </v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class WidgetListTile extends Vue {
  @Prop({ required: true })
  icon!: string

  @Prop({ required: true })
  name!: string

  @Prop({ required: true })
  id!: number
}
</script>
