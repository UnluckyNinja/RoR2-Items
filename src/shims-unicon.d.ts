// to make compiler happy ...
declare module 'vue-unicons' {
  import type { Plugin } from 'vue';
  const plugin: Plugin & { add(arg: any): any};
  export default plugin ;
}

declare module 'vue-unicons/dist/icons'
