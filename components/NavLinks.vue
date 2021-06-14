<template>
  <v-navigation-drawer width="200" permanent>
    <v-list dense class="pt-0">
      <v-list-tile v-for="link in links" :key="link.title" @click="goTo(link.path)">
        <v-list-tile-content>
          <v-list-tile-title>{{ link.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    goTo(path) {
      this.$router.push({
        path
      });
    }
  }
};
</script>

<docs>
```
<NavLinks :links="[{title:'Counter',path:'#counter'},{title:'Infinite Scroll',path:'#infinitescroll'}]" />
```
</docs>
