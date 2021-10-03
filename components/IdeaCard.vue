<template>
  <v-card class="mx-auto idea-card">
    <v-list-item>
      <v-list-item-avatar style="background-color: tomato;">
        <v-icon color="white">mdi-account-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">
          Our Changing Planet
        </v-list-item-title>
        <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
    <v-card-text style="position: relative;">
      <!-- <v-btn absolute color="orange" class="white--text" fab small right top>
        <v-icon>mdi-more </v-icon>
      </v-btn> -->
      "Turns out semicolon-less style is easier and safer in TS because most
      gotcha edge cases are type invalid as well."
      {{
        Math.floor(Math.random() * 20) % 2 === 0
          ? "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
          : ""
      }}
      <div>
        <v-chip class="mr-1" label x-small>
          <v-icon left x-small>mdi-label</v-icon>
          Tags
        </v-chip>
        <v-chip class="mr-1" label x-small>
          <v-icon left x-small>mdi-label</v-icon>
          Tags
        </v-chip>
      </div>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-row class="no-gutters text-center">
        <v-col>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <span class="subheading">256</span>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
          <span class="subheading">45</span>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class IdeaCard extends Vue {}
</script>

<style ${2|scoped,|} lang="scss">
.idea-card {
  // max-width: 320px;
}
</style>
