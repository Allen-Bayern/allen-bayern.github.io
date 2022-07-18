<template>
  <div class="my-navigator">
    <h1 class="card-title">
      {{ cardTitle }}
    </h1>
    <h2 class="subtitles"
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
    flex-direction column
    &::after
      content 'HIM'
      font-size 0.4rem
</style>