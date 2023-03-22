<template lang="pug">
q-card.basket(flat)
  .row.justify-center.q-pa-none.summary-section
    q-btn.summary(flat)
      template(v-slot:default="")
        q-item.wrap.content-center
          q-item-label.text-capitalize {{ 'Order Summary' }}
          q-item-label.text--semi-bold  {{ '#26450' }}
  q-list
    template(v-for="item in lol.basket")
      q-item(v-if="item.count").q-pa-none
        q-img.q-mr-md(:src="require(`src/assets/${item.img}.svg`)" :width="imageSize" :height="imageSize" )
        q-item-section
          q-item-label {{ item.name }}
          q-item-label(caption) {{ 'X' + item.count }}
        q-item-section(side)
          q-item-label.text--semi-bold  {{ '$' + item.price }}
  q-card-section.row.input.q-pa-none(v-if="!isComplete")
    q-input.q-pa-none(borderless bg-color="white" placeholder="Discount code" type="text")
      template(v-slot:append="" v-if="isTablet" )
        q-btn.text-white.text-capitalize.q-ma-none(flat rounded) {{'Apply'}}
    q-btn.text-white.text-capitalize.q-ma-none(flat rounded v-if="!isTablet" ) {{'Apply'}}
  q-list
    q-item.q-pt-none.q-pa-none
      q-item-section
        q-item-label {{'Subtotal:'}}
      q-item-section
        q-item-label.flex.justify-end  {{ '$' + totalPrice }}
    q-item.q-pt-none.q-pa-none
      q-item-section
        q-item-label {{'Shipping:'}}
      q-item-section
        q-item-label.flex.justify-end   {{ 'Free' }}
    q-separator(inset='').q-ma-none
    q-item.q-pa-none
      q-item-section
        q-item-label {{'Total'}}
      q-item-section(side)
        q-item-label.text--semi-bold {{ '$' + totalPrice }}
q-card.changing(flat)
  q-card-section.row
    q-img(src="../assets/cashback.svg" width="60px")
    .context
      .row {{'30 days satisfaction '}}
      span {{ 'Guareantee' }}
      .row {{' with '}}
      span {{'money back'}}
  q-separator(inset='')
  q-card-section.row
    q-img(src="../assets/orders.svg" width="60px")
    .context
      .row {{'Over '}}
      span {{ '38,957' }}
      .row {{ ' successfully ' }}
      span {{ 'shipped orders' }}
q-card.jewellery(flat v-if="!isComplete && step === 2")
  q-card-section
    .small-title The ultimate jewellery club
    .text-subtitle2 Ornare rhoncus nunc ut felis. Faucibus dolor at ultrices tincidunt. Pulvinar sed justo et viverra pellentesque.
    ul.list
      li.item
        q-icon(name="check")
        | {{'Extra 10$ off!'}}
      li.item
        q-icon(name="check")
        | {{'Free shipping on marked club items!'}}
      li.item
        q-icon(name="check")
        | {{'Free returns on marked club items!'}}
</template>

<script setup lang="ts">
import {totalPrice, lol, step} from 'src/composables/paymentActions';
import {useQuasar} from 'quasar';
import {computed} from 'vue';
import {useRoute} from 'vue-router';
const {screen} = useQuasar();
const router = useRoute();
const isComplete = computed(() => {
  return router.name === 'ThankYouPage';
})

const isTablet = computed(() => {
  return 1024 <= screen.width
})

const imageSize = computed(() => {
  return screen.sm || screen.xs ? '52px' : '70px';
})
</script>

<style scoped lang="scss">
.basket,
.changing,
.jewellery {
  padding: 14px 14px 14px 22px;
  margin-bottom: 30px;
  border: 1px solid var(--quartz-second);
  box-shadow: 0 10px 30px rgba(22, 8, 49, 0.05) !important;
  @media (max-width: $breakpoint-sm-max) {
    padding: 22px 14px;
  }
  .row {
    flex-wrap: nowrap;
    .q-img {
      min-width: 60px;
      &::v-deep(.q-img__container) {
        .q-img__image {
          object-fit: contain !important;
        }
      }
    }
  }
  .context {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
    margin-left: 25px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: var(--text-color);
    span {
      font-weight: 500;
      color: var(--midnight-express);
    }
  }
}
.jewellery {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--text-color);

  .small-title {
    margin-bottom: 10px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: var(--midnight-express);
  }
  .text-subtitle2 {
    margin-bottom: 20px;
  }
  .list {
    .item {
      margin-bottom: 4px;
      &:last-child {
        margin-bottom: 0;
      }
      .q-icon {
        margin-right: 10px;
        font-size: 16px;
      }
    }
  }
}
.input {
  .q-input {
    width: 100%;
  }
  &::v-deep(.q-field__control) {
    border-radius: 16px;
    padding: 0 5px 0 25px;
    @media (min-width: $breakpoint-sm-max) {
      padding-right: 5px;
    }
    @media (min-width: $breakpoint-xs-max) {
      padding: 0 5px 0 20px;
    }
  }
  .q-btn {
    padding: 11px 33px;
    border-radius: 16px;
    background: var(--midnight-express);
    @media (max-width: $breakpoint-sm-max) {
      max-width: 164px;
      padding: 15px 58px;
      margin: 30px 0 30px 20px;
    }
    @media (max-width: $breakpoint-xs-max) {
      max-width: 110px;
      margin-left: 12px;
    }
  }
}
.basket {
  color: var(--midnight-express);
  background: var(--ghost-white);
  border: 1px solid var(--quartz-second);
  padding: 42px 49px 38px 31px;
  @media (max-width: $breakpoint-sm-max) {
    padding: 30px;
  }
  @media (max-width: $breakpoint-xs-max) {
    padding: 20px 16px;
  }
  .summary {
    width: 100%;
    height: 44px;
    margin-bottom: 30px;
    background: #F5F6FE;
    border: 1px solid #DADDF5;
    border-radius: 8px;
    @media (max-width: $breakpoint-sm-max) {
      &-section {
        display: none;
      }
    }
  }
  &::v-deep(.q-list) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    .q-item {
      min-height: inherit !important;
      padding: 0;
      align-items: center;
      gap: 4px;
      .q-item__label {
        margin-top: 0;
      }
    }
  }
  .q-input {
    margin: 30px 0;
  }

}
</style>
