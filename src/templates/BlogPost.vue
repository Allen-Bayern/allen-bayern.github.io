<template>
  <BlogpostLayout>

  </BlogpostLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import BlogpostLayout from '../layouts/Blogpost.vue';

@Component({
  components: {
    BlogpostLayout,
  },
})
export default class Blogpost extends Vue{

};
</script>

<style>

</style>