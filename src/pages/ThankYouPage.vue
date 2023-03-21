<template lang="pug">
q-page.row.justify-between.thank-page
  .col-xs-12.col-sm-12.col-md-6.col-lg-6.col-xl-6
    toggle-component.q-mb-xl
    q-card(flat bordered).thank
      q-card-section.column.content-center
        q-icon(name="complete")
        .text {{'Thank you!'}}
        .context(v-html="'Your order <span>#15636561</span> has been placed'" )
        q-btn.back(flat icon="arrow_back" label="Back to Shop" @click="back")
    q-card(flat bordered).thank-table
      q-item
        q-item-label.name {{'Name:'}}
        q-item-label.info {{'Oleo Bone'}}
      q-separator(inset='')
      q-item
        q-item-label.name {{'Email:'}}
        q-item-label.info {{'oleo_bone@gmail.com'}}
      q-separator(inset='')
      q-item
        q-item-label.name {{'Ship to:'}}
        q-item-label.info {{'4140 Parker Rd. Allentown, New Mexico 31134'}}
      q-separator(inset='')
      q-item
        q-item-label.name {{'Bill to:'}}
        q-item-label.info {{'4140 Parker Rd. Allentown, New Mexico 31134'}}
      q-separator(inset='')
      q-item
        q-item-label.name {{'Payment:'}}
        q-item-label.info {{'Credit Card'}}
  .col-xs-12.col-sm-12.col-md-5.col-lg-5.col-xl-5(v-if="isTablet")
    basket-section
</template>

<script setup lang="ts">
import ToggleComponent from '../components/ToggleComponent';
import BasketSection from 'components/BasketSection.vue';
import {useQuasar} from 'quasar';
import {computed} from 'vue';
import {useRouter} from 'vue-router';
const {screen} = useQuasar();

const isTablet = computed(() => {
  return 1024 <= screen.width
})

const router = useRouter();

const back = () => {
  return router.push({name: 'top'})
}
</script>

<style scoped lang="scss">
.thank-page{
  padding: 60px 0;
  .thank {
    margin-bottom: 30px;
    .q-icon {
      height: 210px;
      width: 320px;
      margin-bottom: 30px;
    }

    .text {
      font-weight: 600;
      font-size: 24px;
      line-height: 34px !important;
      text-align: center;
    }

    .context {
      margin-bottom: 40px;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px !important;
      text-align: center;
      color: var(--text-color);

      &::v-deep(span) {
        font-weight: 500;
        color: var(--midnight-express);
      }
    }

    .back {
      margin: 0 auto;
      max-width: 213px;
      padding: 18px 30px;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px !important;
      text-transform: inherit;
      color: var(--white);
      background: var(--midnight-express);
      border-radius: 16px;
    }
  }
  .thank-table {
    padding: 40px;
    background: #F1F3F6;
    border-radius: 16px;
    font-weight: 400;
    font-size: 14px;
    .name {
      margin-right: 60px;
      min-width: 65px;
      color: var(--text-color);
    }
    .info {
      margin: 0;
    }
  }
}
</style>
