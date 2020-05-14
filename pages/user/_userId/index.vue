<template>
  <v-card>
    <!-- <v-row align="end" class="fill-height"> -->
    <v-col class="py-0" style="background-color='amber accent-3'">
      <v-list-item color="rgba(0, 0, 0, .4)">
        <v-list-item-avatar size="100" tile>
          <v-img
            src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
          <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-col>
    <!-- </v-row> -->
    <v-tabs
      v-model="tab"
      background-color="amber accent-3"
      right
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Ideas
      </v-tab>

      <v-tab href="#tab-2">
        Favorites
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="i in 2" :key="i" :value="'tab-' + i">
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class UserProfile extends Vue {
  tab = null;
  items = ["Appetizers", "Entrees", "Deserts", "Cocktails"];
  text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
}
</script>

<style ${2|scoped,|} lang="scss">
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
