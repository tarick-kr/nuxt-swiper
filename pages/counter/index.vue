<template>
  <Body>
  <h1 slot="title">Counter</h1>
  <template>
    <Counter/>
  </template>
  </Body>
</template>

<script>
import Body from "~/layouts/Body";
import Counter from "~/components/Counter";
export default {
  components: {
    Body,
    Counter
  }
};
</script>
