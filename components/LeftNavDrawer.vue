<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="miniVariant"
    clipped
    app
    color="blue-grey darken-3"
    dark
  >
    <v-list-item class="user-details" to="/user/1/test">
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
        :color="item.color"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <c-footer />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "nuxt-property-decorator";
import CFooter from "~/components/Footer.vue";

@Component({
  components: {
    CFooter
  }
})
export default class CLeftNavDrawer extends Vue {
  drawer = false;
  fixed = false;
  items = [
    {
      icon: "mdi-chart-bubble",
      title: "Ideas Home",
      to: "/",
      color: "#00bfff"
    }
  ];
  miniVariant = false;
  mounted() {
    this.$root.$on("toggle-nav-drawer", () => {
      this.drawer = !this.drawer;
    });
  }
}
</script>

<style ${2|scoped,|} lang="scss">
@keyframes gradient {
  0% {
    background-position: 100% 0%;
  }
  50% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 100% 0%;
  }
}
.user-details {
  //   background: linear-gradient(45deg, #37474f, #263238, #ffc107);
  //   background-size: 600% 600%;
  //   animation: gradient 30s ease infinite;
}
</style>
