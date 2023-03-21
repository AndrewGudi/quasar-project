<template lang="pug">
q-expansion-item.toggle-basket.q-mb-xl(v-if="!isTablet" v-model='show' :icon="`${show ? 'active-' : ''}basket`" label='Show order summary' :caption="'$' + totalPrice" header-class="text-default")
  q-card
    q-card-section
      basket-section
</template>

<script setup lang="ts">
import {totalPrice} from 'src/composables/paymentActions';
import {computed, ref} from 'vue';
import {useQuasar} from 'quasar';
import BasketSection from 'components/BasketSection.vue';
const show = ref(false);
const {screen} = useQuasar();

const isTablet = computed(() => {
  return 1024 <= screen.width
})
</script>

<style scoped lang="scss">
.toggle-basket {
  margin-top: 16px;
  &.q-expansion-item--expanded {
    @media (max-width: $breakpoint-xs-max) {
      &::v-deep(.q-expansion-item__toggle-icon) {
        color: #7782F1;
      }
    }
  }
  &::v-deep(.text-default) {
    padding: 24px;
    border: 1px solid #D6D8EE;
    border-radius: 20px;
    min-height: inherit;
    .q-item__section--main {
      flex: inherit;
      .q-item__label--caption {
        position: absolute;
        right: 24px;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
        color: var(--midnight-express);
      }
    }
  }
  .q-card__section {
    margin-top: 30px;
    padding: 0;
  }
}
</style>
