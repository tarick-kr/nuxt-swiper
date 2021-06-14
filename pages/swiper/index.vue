<template>
  <Body>
  <h1 slot="title">Swiper</h1>
  <div :class="$style['box']">
    <Swiper/>
  </div>
  </Body>
</template>

<script>
import Body from "~/layouts/Body";
import Swiper from "~/components/Swiper";
export default {
  components: {
    Body,
    Swiper
  }
};
</script>

<style module>
.box {
  width: 500px;
}
</style>
