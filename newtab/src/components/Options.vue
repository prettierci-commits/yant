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
          v-for="({icon, text, route}, i) in menuItems"
          :key="i"
          :to="route"
          @click.stop
        >
          <v-list-tile-action>
            <v-icon>{{ icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ text }}</v-list-tile-title>
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
          />
        </CommonWrapper>
      </v-container>
      <v-divider />
      <router-view
        class="router-options"
        name="options"
      />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { commonModule } from '@/store'
import { routes } from '@/options/router'

import CommonWrapper from '@/components/common/Wrapper.vue'

@Component({
  components: {
    CommonWrapper
  }
})
export default class Options extends Vue {
  drawer: boolean = true
  source: string = 'test'
  activeComponent: string = 'Home'
  menuItems: {
    icon: string,
    text: string,
    route: typeof routes[0]
  }[] = []

  get previewStyle () {
    return {
      backgroundColor: commonModule.styling.backgroundColor
    }
  }

  created () {
    routes.forEach(this.addRoute)
  }

  addRoute (route: typeof routes[0]) {
    if (
      route &&
        route.children
    ) {
      route.children.forEach(this.addRoute)
    }

    if (
      route &&
        route.meta &&
        route.meta.drawer &&
        route.meta.menuName &&
        route.name
    ) {
      this.menuItems.push({
        icon: route.meta.icon,
        text: route.meta.menuName,
        route
      })
    }
  }

  close () {
    window.location.href = './index.html'
  }
}
</script>
