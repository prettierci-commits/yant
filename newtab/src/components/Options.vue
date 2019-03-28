<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      fixed
    >
      <v-list dense>
        <v-list-tile
          v-for="({icon, name, route, id}, i) in drawerItems"
          :key="i"
          :to="route"
          @click.stop
        >
          <v-list-tile-action>
            <v-icon>{{ icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ name }}
              <sup v-if="id">{{ id }}</sup>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      clipped-left
      color="primary"
      fixed
      light
    >
      <v-toolbar-side-icon
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title>YANT</v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click.stop="close"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container
        fluid
        :style="previewStyle"
      >
        <CommonWrapper>
          <router-view
            class="router-preview"
            name="preview"
            :widget-id="$route.params.id"
          />
        </CommonWrapper>
      </v-container>
      <v-divider />
      <router-view
        class="router-options"
        name="options"
        :widget-id="$route.params.id"
      />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Location } from 'vue-router'
import { commonModule, widgetsModule } from '@/store'
import { drawerMap } from '@/options/widgetMetadata'

import CommonWrapper from '@/components/common/Wrapper.vue'

interface IDrawerItem {
  icon: string
  id?: number
  name: string
  route: Location
}

@Component({
  components: {
    CommonWrapper
  }
})
export default class Options extends Vue {
  drawer: boolean = true
  source: string = 'test'
  activeComponent: string = 'Home'

  get drawerItems (): IDrawerItem[] {
    return [
      drawerMap.get('common')!,
      drawerMap.get('widgets')!,
      drawerMap.get('style')!,
      ...widgetsModule.active.map(({ type, id }) => {
        const template = drawerMap.get(type)!

        return {
          ...template,
          id,
          route: {
            ...template.route,
            params: {
              id: `${id}`
            }
          }
        }
      })
    ]
  }

  get previewStyle () {
    return {
      backgroundColor: commonModule.styling.backgroundColor
    }
  }

  close () {
    window.location.href = './index.html'
  }
}
</script>
