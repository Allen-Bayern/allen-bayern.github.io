<template>
  <Layout>
    你已经为他续了{{ N }}秒！请继续加油!
    <button @click="add">+1s</button>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  metaInfo : {
    title : '关于我',
  },
})
export default class About extends Vue {
  N : number = 1;

  add() : void {
    ++this.N;
  }
};
</script>