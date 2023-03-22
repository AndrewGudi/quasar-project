<template lang="pug">
q-card(flat bordered).life-time.q-mb-lg
  .column
    .text-h6 {{ 'Lifetime Warranty' }}
    .text-subtitle2 {{ 'Add a lifetime warranty & enjoy peace of mind for life with your dream collections order for just $4.99' }}
  q-btn(color="black" :style="{maxWidth: '117px'}")
    template(v-slot:default)
      span {{"Add-"}}
      span {{"$4.99"}}
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
  .q-btn {
    text-transform: inherit;
    border-radius: 8px;
    background: var(--midnight-express) !important;
  }
  @media (max-width: $breakpoint-sm-max) {
    display: flex;
    flex-direction: row;
    align-items: center;
    .q-btn {
      min-width: 115px;
      height: 62px;
      line-height: 20px !important;
      margin-left: 45px;
      &::v-deep(.q-btn__content) {
        flex-direction: column;
      }
    }
  }
  @media (max-width: $breakpoint-xs-max) {
    flex-direction: column;
    align-items: start;
    .q-btn {
      margin-left: 0;
      height: 42px;
      &::v-deep(.q-btn__content) {
        flex-direction: row;
      }
    }
  }
}
.express,
.life-time {
  padding: 30px;
  border-radius: 16px;
  @media (max-width: $breakpoint-xs-max) {
    padding: 16px !important;
  }
}
.express {
  .text-h6 {
    font-weight: 600;
    margin-bottom: 20px;
  }
  .q-gutter {
    display: flex;
    flex-wrap: nowrap;
    gap: 15px;
    @media (max-width: $breakpoint-sm-max) {
      gap: 30px;
    }
    @media (max-width: $breakpoint-xs-max) {
      flex-wrap: wrap;
      gap: 12px;
      .q-btn {
        min-width: 145px;
        width: inherit;
      }
    }
  }
  .q-btn {
    width: 100%;
    min-width: 147px;
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
