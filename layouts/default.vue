<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      color="deep-orange darken-3"
      dark
    >
      <v-list-item>
        <v-list-item-avatar color="white">
          <v-icon dark>mdi-account-circle</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">
            John Doe
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-footer fixed>
        <span>Crowdia &copy; 2020</span>
      </v-footer>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      flat
      dark
      color="blue-grey darken-4"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <nuxt-link to="/">
        <div class="yellow logo-wrapper pa-1">
          <v-icon color="amber" dark>mdi-lightbulb-on-outline </v-icon>
          <v-toolbar-title v-text="title" class="ml-1 logo" />
        </div>
      </nuxt-link>
      <v-spacer />
      <v-btn
        class="mx-2"
        fab
        dark
        small
        color="indigo"
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon dark>mdi-pencil</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "mdi-chart-bubble",
          title: "About",
          to: "/about"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "CROWDIA"
    };
  }
};
</script>
<style lang="scss">
.logo-wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 0;
  border-radius: 13px;
  align-items: baseline;
}
a {
  text-decoration: none;
  color: black;
}
.logo {
  letter-spacing: 3px;
}
</style>
