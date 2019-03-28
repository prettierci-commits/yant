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
          header="Available"
          :widgets="[...available]"
        />
      </v-flex>

      <v-flex
        xs12
        sm6
      >
        <DraggableWidgetList
          header="Active"
          :widgets="[...active]"
          @change="updateActive"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import DraggableWidgetList from './DraggableWidgetList.vue'
import draggable from 'vuedraggable'
import { Component, Vue, Watch } from 'vue-property-decorator'
import { widgetsModule } from '@/store'

interface IListItem {
  icon: string
  id: number
  key: string
  name: string
  type: string
}

const widgetProps = new Map<string, {
  name: string
  icon: string
}>([
  ['clock', {
    name: 'Clock',
    icon: 'mdi-clock'
  }],
  ['date', {
    name: 'Date',
    icon: 'mdi-calendar'
  }],
  ['motto', {
    name: 'Motto',
    icon: 'mdi-text'
  }]
])

@Component({
  components: {
    DraggableWidgetList,
    draggable
  }
})
export default class WidgetsOptions extends Vue {
  get active (): IListItem[] {
    return widgetsModule.active.map(({ type, id }, i) => ({
      id,
      key: `a${i}`,
      type,
      ...widgetProps.get(type)!
    }))
  }

  get available (): IListItem[] {
    return widgetsModule.available.map(({ type, id }, i) => ({
      id,
      key: `b${i}`,
      type,
      ...widgetProps.get(type)!
    }))
  }

  updateActive ({ added, removed, moved }: {
    added?: {
      element: IListItem
      newIndex: number
    }
    removed?: {
      element: IListItem
      oldIndex: number
    }
    moved?: {
      element: IListItem
      newIndex: number
      oldIndex: number
    }
  }) {
    if (added) {
      widgetsModule.addToActive({
        index: added.newIndex,
        widget: {
          type: added.element.type,
          id: added.element.id
        }
      })
    }
    if (removed) {
      widgetsModule.removeFromActive({
        index: removed.oldIndex,
        widget: {
          type: removed.element.type,
          id: removed.element.id
        }
      })
    }
    if (moved) {
      widgetsModule.reorderActive({
        oldIndex: moved.oldIndex,
        newIndex: moved.newIndex
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
