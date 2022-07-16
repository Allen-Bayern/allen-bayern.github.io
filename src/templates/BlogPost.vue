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

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.blogPost.title,
    };
  },
}
</script>

<style lang="stylus" scoped>

</style>