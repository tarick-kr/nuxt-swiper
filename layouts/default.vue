<template>
  <div>
    <v-toolbar dark color="primary">
      <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <div class="container">
      <div class="header">
        <NavLinks :links="links"/>
      </div>
      <div class="body">
        <Nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
import NavLinks from "~/components/NavLinks";

export default {
  components: {
    NavLinks
  },
  computed: {
    title() {
      return this.$store.state.title;
    }
  },
  data() {
    return {
      links: [
        {
          title: "About",
          path: "/"
        },
        {
          title: "Swiper",
          path: "/swiper"
        },
        {
          title: "Infinite Scroll",
          path: "/infiniteScroll"
        },
        {
          title: "Counter",
          path: "/counter"
        }
      ]
    };
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #2E495E;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
}

.header {
  display: flex;
  justify-content: center;
}

.body {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
