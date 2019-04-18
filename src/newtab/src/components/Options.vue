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
        @click="openNewtab"
      >
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

      <v-btn
        :href="newtabLink"
        icon
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content class="body-1 options-content">
      <v-container
        fill-height
        fluid
        pa-0
      >
        <v-layout
          :reverse="sideBySide"
          fill-height
          row
          wrap
        >
          <v-flex
            :class="previewContainerClass"
            class="preview-container"
            xs12
            xl6
          >
            <RootView
              :style="previewStyle"
              :widgets="widgets"
              shrink
            />
          </v-flex>

          <v-flex
            xs12
            xl6
          >
            <router-view
              :widget-id="$route.params.id"
              class="router-options"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import RootView from './RootView.vue'
import { Component, Vue } from 'vue-property-decorator'
import { Location } from 'vue-router'
import { widgetsModule } from '@/store'
import { drawerMap } from '@/options/widgetMetadata'

interface DrawerItem {
  icon: string
  id?: number
  name: string
  route: Location
}

@Component({
  components: {
    RootView
  }
})
export default class Options extends Vue {
  drawer: boolean = true
  source: string = 'test'
  activeComponent: string = 'Home'

  get drawerItems (): DrawerItem[] {
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

  get widgets () {
    if (this.$route.meta && this.$route.meta.type) {
      return [{
        type: this.$route.meta.type,
        id: +this.$route.params.id
      }]
    } else {
      return widgetsModule.active
    }
  }

  get sideBySide () {
    return this.$vuetify.breakpoint.name === 'xl'
  }

  get previewContainerClass () {
    return {
      'side-by-side': this.sideBySide
    }
  }

  get previewStyle () {
    return {
      minHeight: !this.sideBySide && this.$route.meta && this.$route.meta.preview
        ? this.$route.meta.preview.minHeight
        : null
    }
  }

  get newtabLink () {
    return `./index.html#${this.$route.path}`
  }

  openNewtab () {
    window.open(this.newtabLink, '', 'chrome')
  }
}
</script>

<style scoped>
.preview-container:not(.side-by-side) {
  border-bottom: 1px solid gray;
}
.preview-container.side-by-side {
  border-right: 1px solid gray;
}
.preview-container.side-by-side > * {
  min-height: 100%;
}
</style>
