<template>
  <div :class="$style.container">
    <slot name="title"></slot>
    <v-container grid-list-md text-xs>
      <v-layout row wrap>
        <v-flex xs12>
          <slot></slot>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style module>
.container {
  width: 100%;
  padding: 16px;
}
</style>
