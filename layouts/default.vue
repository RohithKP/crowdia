<template>
  <v-app>
    <c-left-nav-drawer />
    <v-app-bar clipped-left clipped app flat dark color="blue-grey darken-4">
      <v-app-bar-nav-icon @click.stop="$root.$emit('toggle-nav-drawer')" />
      <nuxt-link to="/" class="logo-wrapper pa-1 ml-4 mr-4 flex-shrink-0">
        <v-icon dark>mdi-lightbulb-on-outline </v-icon>
        <v-toolbar-title v-text="title" class="ml-1 logo" />
      </nuxt-link>
      <v-spacer />
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="mdi-magnify"
        xs="12"
      ></v-text-field>
      <v-btn class="ma-2" outlined rounded color="success" to="/login">
        <v-icon left>mdi-account</v-icon> Sign In
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-responsive height="calc(100vh - 70px)" class="overflow-y-auto">
        <v-container md-fluid>
          <nuxt />
        </v-container>
      </v-responsive>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import CLeftNavDrawer from "~/components/LeftNavDrawer.vue";

@Component({
  components: {
    CLeftNavDrawer
  }
})
export default class DefaultTemplate extends Vue {
  drawer = false;
  title = "CROWDIA";
}
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

// scrollbar style
/* The emerging W3C standard
   that is currently Firefox-only */
* {
  scrollbar-width: thin;
  scrollbar-color: #263238;
}

/* Works on Chrome/Edge/Safari */
*::-webkit-scrollbar {
  width: 6px;
}

*::-webkit-scrollbar-thumb {
  background-color: #263238;
  border-radius: 4px;
  border: 1px solid #ccc;
}
// end - scrollbar style
</style>
