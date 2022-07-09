<template>
<!-- 模仿：http://www.csszengarden.com/002/ -->
  <v-app id="new-theme">
    <v-app-bar
      app
      color="#fff"
      flat
    >
      <v-container>
        <slot name="header"></slot>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row no-gutters>
          <v-col cols="3">
            <v-sheet>
              <slot name="left-side"></slot>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet>
              <slot name="main-content"></slot>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
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
export default class MainTheme extends Vue {


};
</script>

<style lang="stylus">

</style>