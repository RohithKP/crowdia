<template>
  <v-app>
    <v-app-bar app flat dark color="blue-grey darken-4">
      <nuxt-link to="/" class="logo-wrapper pa-1 ml-4 mr-4 flex-shrink-0">
        <v-icon dark>mdi-lightbulb-on-outline </v-icon>
        <v-toolbar-title v-text="title" class="ml-1 logo" />
      </nuxt-link>
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

<script>
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class basicLayout extends Vue {
  title = "CROWDIA";
}
</script>

<style>
  .v-toolbar__content {
    justify-content: center;
  }
</style>
