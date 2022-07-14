<template>
  <div class="navigation">
    <v-card
      height="400"
      width="256"
      class="mx-auto"
    >
      <v-navigation-drawer
        v-model="isDrawerOpen"
      >
        <v-list></v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script lang="ts">
import { 
  Vue, 
  Component, 
  Model,
  Watch,
} from 'vue-property-decorator';

@Component
export default class LeftNavigator extends Vue {
  // Model
  @Model('change', { 
    type: Boolean,
  }) readonly value!: boolean;

  // Watchers
  @Watch('value', {
    immediate: true
  }) onValueChange(val: Boolean) {
    const self = this;
    self.isDrawerOpen = val;
  }

  // Data
  isDrawerOpen : Boolean = false;

  // Methods
};
</script>

<style lang="stylus" scoped>

</style>