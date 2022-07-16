<template>
  <layout></layout>
</template>

<page-query>
  query BlogPost ($path: String!) {
    blogPost
  }
</page-query>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
  },
})
export default class Blogpost extends Vue{

};
</script>

<style lang="stylus" scoped>

</style>