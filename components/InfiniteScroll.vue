<template>
  <div
    v-infinite-scroll="getMoreItems"
    infinite-scroll-disabled="isNoData"
    infinite-scroll-distance="10"
  >
    <v-list>
      <v-list-tile v-for="item in items" :key="item.title">
        <v-list-tile-content>
          <v-list-tile-title v-html="item.title"></v-list-tile-title>
          <v-list-tile-sub-title v-html="item.body"></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    loadMore: Function
  },
  data() {
    return {
      isNoData: false
    };
  },
  methods: {
    getMoreItems: function() {
      this.loadMore();
    }
  }
};
</script>
