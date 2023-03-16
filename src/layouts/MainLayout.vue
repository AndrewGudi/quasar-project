<template lang="pug">
q-layout
  q-header(:style="styles()").row.flex-center.header-content
    .row.items-center.justify-start.center
        q-img(src="../assets/logo.webp" alt="logo" width="171px" height="36px")
  q-page-container
    router-view
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
</style>
