<template>
  <v-container grid-list-md>
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="(list, i) in lists"
        :key="i"
        xs12
        sm6
      >
        <v-list two-line>
          <v-subheader>
            {{ list.title }}
          </v-subheader>
          <draggable
            group="modules"
            :list="list.items"
          >
            <v-list-tile
              v-for="({ name, icon, id }) in list.items"
              :key="id"
              class="draggable"
              avatar
            >
              <v-list-tile-avatar>
                <v-icon>
                  {{ icon }}
                </v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-text="name" />
              </v-list-tile-content>
            </v-list-tile>
          </draggable>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import draggable from 'vuedraggable'
import { Component, Vue, Watch } from 'vue-property-decorator'
import { orderModule } from '@/store'

@Component({
  components: {
    draggable
  }
})
export default class OrderOptions extends Vue {
  storeModule = orderModule
  lists = [{
    title: 'Inactive',
    items: orderModule.inactiveList
  }, {
    title: 'Active',
    items: orderModule.activeList
  }]

  get order (): string[] {
    return this.lists[1].items.map(
      ({ type }) => type
    )
  }

  @Watch('order')
  updateOrder () {
    orderModule.setOrder(this.order)
  }
}
</script>

<style scoped>
.draggable {
  cursor: move;
}
</style>
