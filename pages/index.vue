<template>
  <!-- <client-only placeholder="loading..."> -->
  <div>
    <v-row class="masonry" v-masonry item-selector=".child">
      <v-col
        v-masonry-tile
        class="child my-1"
        cols="12"
        sm="6"
        lg="4"
        xl="3"
        v-for="item in 20"
        :key="item"
      >
        <idea-card></idea-card>
      </v-col>
    </v-row>
    <v-btn color="pink" dark fixed bottom right fab>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
  <!-- </client-only> -->
</template>

<script lang="ts">
import { Component, Vue, Inject } from "nuxt-property-decorator";
import IdeaCard from "~/components/IdeaCard.vue";

@Component({
  components: {
    "idea-card": IdeaCard
  }
})
export default class MyClass extends Vue {
  $redrawVueMasonry: any;
  text = "This is the index page";
  mounted() {
    if (typeof this.$redrawVueMasonry === "function") {
      this.$redrawVueMasonry();
      console.log("hey");
    }
  }
}
</script>

<style scoped lang="scss"></style>
