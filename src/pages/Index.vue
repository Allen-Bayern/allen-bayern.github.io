<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/assets/cbddl.jpg" width="135" />

    <h1 class="name">Yuebing (Zhao Zhengyang)</h1>
    <h2 class="occupation">FE at DXM Inc.</h2>
    <div class="contact-me">
      <a href="mailto:tsingcheng1327@live.cn">
          <v-icon>
            mdi-at
          </v-icon>
      </a>
      <a href="https://github.com/Allen-Bayern">
        <v-icon>
          mdi-github
        </v-icon>
      </a>
    </div>

    <p>
      你们好，我叫月饼，他们都叫我饼哥！
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  metaInfo: {
    title : 'Hello，欢迎来我的博客闲逛！',
  },
})
export default class Index extends Vue {
  
}
</script>

<style lang="stylus" scoped>
font-stack = chelsea market, Georgia, serif
.home-links a 
  margin-right 1rem

.name
  font-family font-stack
  font-size 1.5rem

.occupation
  font-family font-stack
  font-size 1.2rem
</style>
