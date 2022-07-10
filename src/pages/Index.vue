<template>
  <layout>
    <template slot="header">
      Hey! This is Yueb's blog!
    </template>
    <template slot="left-side">
      <left-navigator

      ></left-navigator>
    </template>
    <template slot="main-content">
      <div class="main-content">
        <!-- Learn how to use images here: https://gridsome.org/docs/images -->
        <g-image 
          alt="Example image" 
          src="~/assets/cbddl.jpg" 
          width="135" 
        />

        <h1 class="name">Yuebing (Zhao Zhengyang)</h1>
        <h2 class="occupation">FE at Duxiaoman Finance Inc.</h2>

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
          <a href="https://juejin.cn/user/483440848286439">
            <v-icon>
              mdi-web
            </v-icon>
          </a>
        </div>

        <p class="myself">
          Hey! I'm Zhao Zhengyang (赵正阳). You can also call me Yuebing, 月饼 in Chinese. <br/>
          I am a front-end developer empolyed by Duxiaoman Finance Inc..  I am still studying technology now.<br />
        </p>
        </div>
    </template>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import LeftNavigator from '../components/LeftNavigator.vue';
import { NaviLink } from '../utils/interfaces';

@Component({
  metaInfo: {
    title : '欢迎来我的博客闲逛',
  },
  components: {
    LeftNavigator,
  }
})
export default class Index extends Vue {
  
};
</script>

<style lang="stylus" scoped>
// Variations
font-stack = chelsea market, Georgia, serif

// CSS codes
.main-content
  display flex
  flex-direction column
  align-items center
  &.g-image
    margin 1rem 0 1rem 0

  .home-links a 
    margin-right 1rem

  .name
    font-family font-stack
    font-size 1.5rem

  .occupation
    font-family font-stack
    font-size 1.2rem

  .contact
    margin-bottom 1rem

  .contact-me > a
    margin-right 1rem

  .myself
    margin 1.25rem 1.5rem 1.25rem 0
    font-size 1rem
</style>
