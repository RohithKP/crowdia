<template>
  <v-card class="mx-auto" color="#26c6da" dark max-width="400">
    <v-list-item>
      <v-list-item-avatar color="white">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">
          Our Changing Planet
        </v-list-item-title>
        <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
    <v-card-text class="headline font-weight-thin">
      "Turns out semicolon-less style is easier and safer in TS because most
      gotcha edge cases are type invalid as well."
    </v-card-text>
    <div class="pl-4 pr-4">
      <v-chip class="mr-1" label x-small text-color="white">
        <v-icon left x-small>mdi-label</v-icon>
        Tags
      </v-chip>
      <v-chip class="mr-1" label x-small text-color="white">
        <v-icon left x-small>mdi-label</v-icon>
        Tags
      </v-chip>
    </div>
    <v-divider />
    <v-card-actions>
      <v-row class="no-gutters text-center">
        <v-col>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <span class="subheading mr-2">256</span>
        </v-col>
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

<style ${2|scoped,|} lang="scss"></style>
