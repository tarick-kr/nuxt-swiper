<template>
  <div>{{ counter }}</div>
</template>

<script>
export default {
  props: {
    offset: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      counter: 0
    };
  },
  mounted() {
    setInterval(() => {
      this.counter += this.offset;
    }, 1000);
  }
};
</script>

<docs>
```jsx
<Counter />
```
</docs>
