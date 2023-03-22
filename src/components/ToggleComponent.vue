<template lang="pug">
q-expansion-item.toggle-basket(v-if="!isTablet" v-model='show' :icon="`${show ? 'active-' : ''}basket`" label='Show order summary' :caption="'$' + totalPrice" header-class="text-default")
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
  @media (max-width: $breakpoint-sm-max) {
    margin-bottom: 30px;
  }
  @media (max-width: $breakpoint-xs-max) {
    margin-bottom: 20px;
  }
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
    @media (max-width: $breakpoint-sm-max) {
      padding: 18px 16px;
    }
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
      @media (max-width: $breakpoint-sm-max) {
        .q-item__label {
          font-size: 14px;
        }
      }
    }
    @media (max-width: $breakpoint-sm-max) {
      .q-item__section {
        min-width: inherit;
        .q-icon {
          font-size: 20px;
        }
      }
    }
  }
  .q-card__section {
    margin-top: 30px;
    padding: 0;
  }
}
</style>
