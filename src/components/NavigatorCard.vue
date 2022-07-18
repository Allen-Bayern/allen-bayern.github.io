<template>
  <div class="my-navigator">
    <h1 
      class="card-title"
      @click="handleFolding"
    >
      {{ cardTitle }}
    </h1>
    <h2 
      class="subtitles"
      v-if="!isFolded"
      v-for="(subtitle, index) in subtitlesBelow"
      :key="index"
    >
      <g-link :to="subtitle.link">{{ subtitle.title }}</g-link>
    </h2>
  </div>
</template>

<script lang="ts">
import { 
  Vue, 
  Component,
  Prop, 
} from 'vue-property-decorator';
// import NavigationLinks from '../abstract';

@Component
export default class NavigatorCard extends Vue {
  // Props
  @Prop({ default: '' }) readonly cardTitle: string;
  @Prop({ default: () => [] }) readonly subtitlesBelow : NavigationLinks[];

  // Data
  isFolded: boolean = false;

  // Methods
  handleFolding() : void {
    const self = this;
    self.isFolded = !self.isFolded;
  }
};
</script>

<style lang="stylus" scoped>
.my-navigator
  display flex
  flex-direction column
  border 1px solid red
  text-align right
  .card-title
    font-size 1.6rem
    display flex
    &::before
      content ''
      flex-grow 1
    &::after
      content 'HIM'
      flex-grow 1
      font-size 0.4rem
</style>