<template>
  <div class="navigation">
    <div class="navi-title">{{ naviTitle }}</div>
    <div 
      class="navi-links"
      v-for="(item, index) in naviLinks"
      :key="index"
    >
      {{ item.linkName }}
    </div>
  </div>
</template>

<script lang="ts">
import { 
  Vue, 
  Component, 
  Prop,
  } from 'vue-property-decorator';

// Interfaces
interface naviLink {
  name: String,
  url: String,
}

@Component
export default class LeftNavigator extends Vue {
  // Props
  @Prop({ default: '' }) readonly naviTitle: string;
  @Prop({ default: [] }) readonly naviLinks: naviLink[];

};
</script>

<style lang="stylus" scoped>
.navigation
  display flex
  flex-direction column
  justify-content right
</style>