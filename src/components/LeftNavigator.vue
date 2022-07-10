<template>
  <div class="navigation">
    <div class="navi-title">{{ naviTitle }}</div>
    <div 
      class="navi-links"
      v-for="(item, index) in naviLinks"
      :key="index"
    >
      <g-link
        :to="item.url"
      >
        {{ item.name }}
      </g-link>
    </div>
  </div>
</template>

<script lang="ts">
import { 
  Vue, 
  Component, 
  Prop,
  } from 'vue-property-decorator';
import { NaviLink } from '../utils/interfaces';

@Component
export default class LeftNavigator extends Vue {
  // Props
  @Prop({ default: '' }) readonly naviTitle: string;
  @Prop({ default: [] }) readonly naviLinks: NaviLink[];

};
</script>

<style lang="stylus" scoped>
.navigation
  display flex
  flex-direction column
  justify-content center
  .navi-links
    display flex
    flex-direction inherit
</style>