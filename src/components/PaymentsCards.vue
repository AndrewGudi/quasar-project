<template lang="pug">
q-card(flat bordered).life-time.q-mb-lg
  .column
    .text-h6 {{ 'Lifetime Warranty' }}
    .text-subtitle2 {{ 'Add a lifetime warranty & enjoy peace of mind for life with your dream collections order for just $4.99' }}
    q-btn(color="black" label="Add-$4.99" :style="{maxWidth: '117px'}")
q-card(flat bordered).express.q-mb-xl
  .column
    .text-h6.q-mb-lg {{ 'Express Checkout' }}
    .q-gutter.wrap
      q-btn( v-for="(item, index) in items" :icon="item" :color="item")
</template>

<script setup lang="ts">
const items = ['shop', 'paypal', 'google'];
</script>

<style scoped lang="scss">
.life-time {
  background-color: #f1f3f6;
  .text-h6 {
    font-weight: 600;
    margin-bottom: 7px;
  }
  .text-subtitle2 {
    margin-bottom: 15px;
    color: var(--text-color);
  }
}
.express,
.life-time {
  padding: 30px;
  border-radius: 16px;
}
.express {
  .text-h6 {
    font-weight: 600;
    margin-bottom: 20px;
  }
  .q-gutter {
    display: flex;
    gap: 20px;
  }
  .q-btn {
    width: calc(33.33% - 11px);
    min-width: 150px;
    max-width: 150px;
    height: 50px;
    border-radius: 12px;
    background-size: contain;
    &::v-deep(.q-icon) {
      width: max-content;
      max-width: 90px;
    }
    &.bg-shop {
      background-color: var(--han-purple);
    }
    &.bg-paypal {
      background-color: var(--cream-can);
    }
    &.bg-google {
      background-color: var(--black);
    }
  }
}
</style>
