<template lang="pug">
q-layout
  q-header(:style="styles()").row.flex-center.header-content
    .row.items-center.justify-start.center
      a(href="/")
        q-img(src="../assets/logo.webp" alt="logo" width="171px" height="36px")
  q-page-container
    router-view.page
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {styles} from 'src/composables/paymentActions';
</script>
<style lang="scss" scoped>
header {
  background-color: var(--black-russian);
}
.header-content {
  height: 80px;
}
.q-page-container {
  display: flex;
  justify-content: center;
  .page {
    width: 100%;
    padding: 60px 0;
    margin: 0 40px;
    max-width: var(--viewport);
    @media (max-width: $breakpoint-sm-max) {
      margin: 0 40px;
    }
    @media (max-width: $breakpoint-xs-max) {
      margin: 0 16px;
      padding: 30px 0;
    }
  }
}
</style>
