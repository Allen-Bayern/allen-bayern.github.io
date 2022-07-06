<template>
<!-- 模仿：http://www.csszengarden.com/002/ -->
  <v-app id="new-theme">
    <v-app-bar
      app
      color="#fff"
      height="3.875000rem"
      flat
    >
      <v-container>
        <slot name="header"></slot>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-col>
          <v-sheet
            color="#ffd7c4"
            width="12.5rem"
          ></v-sheet>
        </v-col>
        <v-col cols="2">
          <v-sheet
            color="#FFC5A9"
          >
            <slot></slot>
          </v-sheet>
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class MainTheme extends Vue {

};
</script>

<style lang="stylus">

</style>