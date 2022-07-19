<template>
  <layout>
    <template slot="main-content">
      <div class="article">
        <h1>{{ $page.blogPost.title }}</h1>
        <span>{{ $page.blogPost.date }}</span>
        <div class="content" v-html="$page.blogPost.content" />
      </div>
    </template>
  </layout>
</template>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
    }
  }
</page-query>

<script  lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  metaInfo() {
    const self: Vue = this;
    return {
      title: (self as any)['$page'].blogPost.title,
    };
  },
})
export default class BlogPost extends Vue {
  
}
</script>

<style lang="stylus" scoped>

</style>