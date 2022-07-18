<template>
  <router-view></router-view>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  metaInfo() {
    const self = this;
    return {
      title: (self as any).$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: (self as any).$static.metadata.siteDescription
        }
      ]
    };
  },
});
</script>