<template>
  <client-only placeholder="loading...">
    <v-row class="masonry" v-masonry item-selector=".child">
      <v-col v-masonry-tile class="child" cols="12" sm="6" lg="4" xl="3">
        <idea-card></idea-card>
      </v-col>
      <!-- card 2-->
      <v-col v-masonry-tile class="child" cols="12" sm="6" lg="4" xl="3">
        <idea-card></idea-card>
      </v-col>
      <!-- card 3 -->
      <v-col v-masonry-tile class="child" cols="12" sm="6" lg="4" xl="3">
        <idea-card></idea-card>
      </v-col>
      <!-- card 4 -->
      <v-col v-masonry-tile class="child" cols="12" sm="6" lg="4" xl="3">
        <idea-card></idea-card>
      </v-col>
    </v-row>
  </client-only>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import IdeaCard from "~/components/IdeaCard.vue";

@Component({
  components: {
    "idea-card": IdeaCard
  }
})
export default class MyClass extends Vue {
  text = "This is the index page";
  mounted() {
    console.log("hey");
  }
}
</script>

<style scoped lang="scss"></style>
