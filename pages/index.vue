<template>
  <Body>
  <h1 slot="title">About</h1>
  <template>
    <v-treeview :items="items" open-all></v-treeview>
  </template>
  </Body>
</template>

<script>
import Body from "~/layouts/Body";

export default {
  components: {
    Body
  },
  asyncData(context) {
    context.store.commit("title/set", "About");
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Plugins :",
          children: [
            { id: 2, name: "vue-awesome-swiper" },
            { id: 3, name: "vue-infinite-scroll" }
          ]
        },
        {
          id: 11,
          name: "Modules :",
          children: [
            { id: 12, name: "vuetify" },
            { id: 13, name: "google-tag-manager" }
          ]
        },
        {
          id: 21,
          name: "Others :",
          children: [
            { id: 22, name: "counter" },
            { id: 23, name: "vue-styleguidist" }
          ]
        }
      ]
    };
  }
};
</script>
