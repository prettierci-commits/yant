<template>
  <v-list two-line>
    <v-subheader>
      {{ header }}
    </v-subheader>
    <draggable
      :value="widgets"
      group="modules"
      @change="v => $emit('change', v)"
    >
      <v-list-tile
        v-for="({ name, icon, id, key }) in widgets"
        :id="id"
        :key="key"
        :icon="icon"
        :name="name"
        avatar
        class="draggable"
      >
        <v-list-tile-avatar>
          <v-icon>
            {{ icon }}
          </v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ name }}
            <sup>{{ id }}</sup>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </draggable>
  </v-list>
</template>

<script lang="ts">
import draggable from 'vuedraggable'
import { Component, Vue, Prop } from 'vue-property-decorator'

interface ListItem {
  icon: string
  id: number
  key: string
  name: string
}

@Component({
  components: {
    draggable
  }
})
export default class DraggableWidgetList extends Vue {
  @Prop({ required: true })
  header!: string

  @Prop({ required: true })
  widgets!: ListItem[]
}
</script>

<style scoped>
.draggable {
  cursor: move;
}
</style>
