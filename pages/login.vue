<template>
  <v-layout>
    <v-card flat class="mx-auto" max-width="400" min-width="350px">
      <v-card-title class="justify-center">
        <h2 class="display-1 font-weight-bold text--darken-2 grey--text">
          Sing In
        </h2>
      </v-card-title>
      <v-card-actions>
        <div style="width: 100%">
          <div class="mb-4">
            <v-btn block tile outlined color="#3b5998">
              <v-icon left>mdi-facebook</v-icon> Facebook
            </v-btn>
          </div>
          <div class="my-4">
            <v-btn block tile outlined color="#4885ed">
              <a href="/auth/google">
                <v-icon left>mdi-google</v-icon> Google
              </a>
            </v-btn>
          </div>
          <div class="mt-4">
            <v-btn block tile outlined color="#333">
              <v-icon left>mdi-github</v-icon> Github
            </v-btn>
          </div>
        </div>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "nuxt-property-decorator";
import IdeaCard from "~/components/IdeaCard.vue";

@Component({
  layout: "basic"
})
export default class MyClass extends Vue {}
</script>

<style scoped lang="scss"></style>
