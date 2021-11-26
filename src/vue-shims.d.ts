import * as Vue from 'vue';
import { MetaInfo, MetaInfoComputed } from 'vue-meta';
declare module "*.vue" {
  export default Vue;
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
      metaInfo?: MetaInfo | MetaInfoComputed | undefined;
  }
}