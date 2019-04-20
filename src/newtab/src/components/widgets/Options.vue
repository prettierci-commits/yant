<template>
  <v-container grid-list-md>
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        sm6
      >
        <DraggableWidgetList
          :widgets="[...available]"
          header="Available"
        />
      </v-flex>

      <v-flex
        xs12
        sm6
      >
        <DraggableWidgetList
          :widgets="[...active]"
          header="Active"
          @change="updateActive"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import DraggableWidgetList from './DraggableWidgetList.vue'
import draggable from 'vuedraggable'
import { Component, Vue } from 'vue-property-decorator'
import { drawerMap } from '@/options/widgetMetadata'
import { widgetsModule, Widget } from '@/store'

interface ListItem extends Widget {
  icon: string
  key: string
  name: string
}

@Component({
  components: {
    DraggableWidgetList,
    draggable
  }
})
export default class WidgetsOptions extends Vue {
  get active (): ListItem[] {
    return widgetsModule.active.map(({ type, id }, i) => ({
      id,
      key: `a${i}`,
      type,
      ...drawerMap.get(type)!
    }))
  }

  get available (): ListItem[] {
    return widgetsModule.available.map(({ type, id }, i) => ({
      id,
      key: `b${i}`,
      type,
      ...drawerMap.get(type)!
    }))
  }

  updateActive ({ added, removed, moved }: {
    added?: {
      element: ListItem
      newIndex: number
    }
    removed?: {
      element: ListItem
      oldIndex: number
    }
    moved?: {
      element: ListItem
      newIndex: number
      oldIndex: number
    }
  }) {
    if (added) {
      widgetsModule.add({
        id: added.newIndex,
        type: added.element.type
      })
    }
    if (removed) {
      widgetsModule.delete({
        id: removed.oldIndex
      })
    }
    if (moved) {
      widgetsModule.reorder({
        oldId: moved.oldIndex,
        newId: moved.newIndex
      })
    }
  }
}
</script>

<style scoped>
.draggable {
  cursor: move;
}
</style>
