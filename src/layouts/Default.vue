<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      您好
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="hideOrShow"></v-app-bar-nav-icon>

      <v-toolbar-title>Blog</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class DefaultLayout extends Vue {
  drawer : boolean = false;

  hideOrShow() : void {
    this.drawer = !this.drawer;
  };
};
</script>

<style lang="stylus">
body
  font-family -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin 0
  padding 0
  line-height 1.5
</style>
