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
        <v-list>
          <v-list-item
            v-for="(item, index) in links"
            :key="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-divider></v-divider>
            <v-list-item
              v-for="(elem, _index) in item"
              :key="_index"
            >
              {{ elem }}
            </v-list-item>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script lang="ts">
import { 
  Vue, 
  Component,
  Prop,
  Model,
  Watch,
} from 'vue-property-decorator';

@Component
export default class LeftNavigator extends Vue {
  // Model
  @Model('change', { 
    type: Boolean,
  }) readonly value!: boolean;

  // Props
  @Prop({
    default: [],
  }) readonly links: NavigationLinks[];

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