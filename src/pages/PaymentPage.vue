<template lang="pug">
q-page(width="100%").row.justify-between.center.payment-content
  .col-xs-12.col-sm-12.col-md-6.col-lg-6.col-xl-6
    .global-title {{ 'Checkout' }}
    q-stepper(
    v-model="step"
    ref="stepper"
    color="#000034"
    flat
    animated)
      q-step(:name='1' title='Information' prefix="1" active-icon="1" active-color="midnight-express" :done="step === 1")
      q-step(:name='2' title='Payment' prefix="2" active-icon="2" active-color="midnight-express" :done="step === 2")
    q-card(flat bordered).life-time.q-mb-lg
      .column
        .text-h6 {{ 'Lifetime Warranty' }}
        .text-subtitle2 {{ 'Add a lifetime warranty & enjoy peace of mind for life with your dream collections order for just $4.99' }}
        q-btn(color="black" label="Add-$4.99" :style="{maxWidth: '117px'}")
    q-card(flat bordered).express.q-mb-xl
      .column
        .text-h6.q-mb-lg {{ 'Express Checkout' }}
        .q-gutter
          q-btn( v-for="(item, index) in items" :class="[index < 2 ? 'q-mr-md' : '', item]")
    section(v-if="isFirstStep").q-mb-xl
      q-card(flat).q-mb-xl.flex.column
        .text-h4.sub-title  {{ 'Contact information' }}
        .flex.column.q-mt-lg
          .form-title {{'Email'}}
          q-input.q-mt-sm(standout v-model="formData.email" placeholder="Enter your email" type="email" :dense="dense")
            template(v-slot:prepend)
              q-img(src="../assets/email.svg" width="18px" height="18px")
        .flex.column
          .form-title.q-mt-md {{'Phone Number'}}
          q-input.q-mt-sm(standout v-model="formData.phone" placeholder="Enter your phone number" type="number" :dense="dense")
            template(v-slot:prepend)
              q-img(src="../assets/phone.svg" width="18px" height="18px")
      billing-address
    section(v-if="isSecondStep").second-step
      q-card(flat).q-mb-xl.flex.column
        section
          .text-h4.sub-title.q-mb-lg  {{ 'Payment' }}
          .q-gutter.payment-btns.q-mb-lg
            q-btn.credit-card(label="Credit Card" flat bordered)
            q-btn.paypal(flat label="Paypal")
          .flex.column.q-mt-lg
            .form-title {{'Credit Card Number'}}
            q-input.q-mt-sm(standout v-model="formDataSecond.card" placeholder="2548 9841 2570 ****" type="number" :dense="dense")
              template(v-slot:prepend)
                q-img(src="../assets/card.svg" width="18px" height="18px")
          .flex.column.q-mt-lg
            .form-title {{'Name on Card'}}
            q-input.q-mt-sm(standout v-model="formDataSecond.name" placeholder="Enter name on card" type="number" :dense="dense")
              template(v-slot:prepend)
                q-img(src="../assets/user.svg" width="18px" height="18px")
          .row.justify-between.q-mt-md
            .flex.column(:style="{maxWidth: '262px', width: '50%'}")
              .flex.column.form-title {{'Expiry Date'}}
              q-input.q-mt-sm(standout v-model="formDataSecond.date" placeholder="MM/YY" type="text" :dense="dense")
                template(v-slot:append)
                  q-img(src="../assets/calendar.svg" width="18px" height="18px")
            .flex.column(:style="{maxWidth: '262px', width: '50%'}")
              .form-title {{'Security Code'}}
              q-input.q-mt-sm(standout v-model="formDataSecond.cvv" placeholder="CVV" type="number" :dense="dense")
          q-checkbox.q-mt-md(v-model="formDataSecond.check" label="By checking this box, I acknowledge that I have read and agree to the Terms of Service, and Monthly Billing Terms of this website and want to opt-in for the monthly billed Dream Collection Club®")
        section.q-mt-xl
          .text-h4.sub-title.q-mb-xs {{ 'Billing Address' }}
          .text-subtitle2.sub-text.q-mb-md {{ 'Specify the address for your payment option' }}
          .flex.column
            q-radio(v-model="shape" :val="1" label="Same as shipping address" color="black")
            q-radio(v-model="shape" :val="2" label="Same as shipping address" color="black")
          billing-address.q-mt-lg(v-if="shape === 2")
    q-btn(@click="onSubmit" label="Continue to Payment" icon-right="east" flat).submit
  .col-xs-12.col-sm-12.col-md-5.col-lg-5.col-xl-5
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {computed, onMounted, reactive, ref} from 'vue';
import {useQuasar} from 'quasar';
import BillingAddress from 'components/BillingAddress.vue';

onMounted(() => {
  step.value = 1;
})

const shape = ref(1);

const items = ['shop', 'paypal', 'google'];

const step = ref(0);
const $q = useQuasar();
const dense = ref(false);

const isFirstStep = computed(() => {
  return step.value === 1;
})
const isSecondStep = computed(() => {
  return step.value === 2;
})

const formData = reactive({
  email: null,
  phone: null,
})
const formDataSecond = reactive({
  card: null,
  name: null,
  date: null,
  cvv: null,
  check: false,
})

const onSubmit = () => {
  step.value = 2;
};

</script>

<style lang="scss" scoped>
.payment-content {
  padding: 60px 0;
  margin: 0 auto;
  .life-time {
    background-color: #F1F3F6;
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
    .q-btn {
      width: calc(33.33% - 11px);
      max-width: 147px;
      height: 50px;
      border-radius: 12px;
      background-size: contain;
      &:before {
        content: "";
        margin: 0 auto;
        border: none;
        box-shadow: inherit;
      }
      &.shop {
        background-color: var(--han-purple);
        &:before {
          background: url("src/assets/shop.webp") no-repeat center;
          background-size: contain;
          width: 86px;
        }
      }
      &.paypal {
        background-color: var(--cream-can);
        &:before {
          background: url("src/assets/paypal.webp") no-repeat center;
          background-size: contain;
          width: 90px;
        }
      }
      &.google {
        background-color: var(--black);
        &:before {
          background: url("src/assets/google.webp") no-repeat center;
          background-size: contain;
          width: 56px;
        }
      }
    }

  }
  .q-field {
    &::v-deep(.q-field__inner) {
      .q-field__control {
        border-radius: 16px;
      }
    }
  }
  .submit {
    padding: 18px 40px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-transform: inherit;
    background-color: var(--midnight-express);
    color: var(--white);
    border-radius: 16px;
    &::v-deep(.q-icon) {
      font-size: 1.2rem;
    }
  }
  .second-step {
    .payment-btns {
      .q-btn {
        padding: 16px 25px;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        text-transform: inherit;
        border-radius: 16px;
      }
      .credit-card {
        color: var(--light-slate-blue);
        background: rgba(228, 228, 255, 0.1);
        border: 1px solid var(--light-slate-blue);
        margin-right: 15px;
      }
      .paypal {
        color: var(--text-color-second);
        border: 1px solid var(--text-color-second);
      }
    }
  }
}
</style>
