<template>
  <Layout>
    你已经为他续了{{ N }}秒！请继续加油
    <button @click="add">+1s</button>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
// import "~/meta-info";

let N : number;

export default Vue.extend({
  metaInfo: {
    title : 'About',
  },
  data(){
    return {
      N : 1,
    };
  },
  methods: {
    add() : void {
      ++this.N;
    }
  }
});
</script>