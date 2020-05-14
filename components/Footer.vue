<template>
  <v-footer fixed class="flex-column text-center" align-center>
    <v-btn
      small
      text
      rounded
      class="my-1"
      v-for="item in items"
      :key="item.title"
      :to="item.to"
      router
      exact
    >
      {{ item.title }}
    </v-btn>
    <div class="grey--text caption">crowdia&copy;2020</div>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class CFooter extends Vue {
  items = [
    { title: "About Us", to: "/about" },
    { title: "Contact Us", to: "contact-us" }
  ];
}
</script>

<style ${2|scoped,|} lang="scss"></style>
