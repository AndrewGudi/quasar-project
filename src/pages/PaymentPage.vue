<template lang="pug">
q-page(width="100%").row.no-wrap.center.payment-content
  section.left
    .global-title {{ 'Checkout' }}
    q-stepper(
    v-model="step"
    ref="stepper"
    color="#000034"
    flat
    animated)
      q-step(:name='1' activeIcon="none" title='Information' prefix="1" :done="step > 1")
        toggle-component
        payments-cards
        section
          q-card(flat).flex.column.user-form
            q-form(
              ref="userRef"
            )
              .text-h4.sub-title  {{ 'Contact information' }}
              .flex.column.q-mt-25
                .form-title {{'Email'}}
                q-input.q-mt-sm(
                  outlined
                  v-model="formData.email"
                  placeholder="Enter your email"
                  type="email"
                  lazy-rules
                  :rules="[val => val && val.length > 0 || 'Enter a valid email address', val => /.+@.+\\..+/.test(val) || 'Enter a valid email address']"
                  )
                  template(v-slot:prepend)
                    q-icon(name="email")
              .flex.column
                .form-title {{'Phone Number'}}
                q-input.q-mt-sm(
                  outlined
                  v-model="formData.phone"
                  placeholder="Enter your phone number"
                  type="text"
                  mask="(###) ###-####"
                  unmasked-value
                  :rules="[val => val && val.length > 0 || 'Enter a valid phone number', val => /^\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$/.test(val) || 'Enter a valid phone number']"
                  )
                  template(v-slot:prepend)
                    q-icon(name="phone")
          billing-address
      q-step(:name='2' activeIcon="none" title='Payment' prefix="2" :done="step > 2")
        toggle-component
        payments-cards
        section.second-step
          q-card(flat).q-mb-xl.flex.column
            section
              .text-h4.sub-title  {{ 'Payment' }}
              .q-gutter.payment-btns.q-mt-25
                q-btn.credit-card(label="Credit Card" type="button" flat bordered)
                q-btn.paypal(flat label="Paypal")
              q-form(
                ref="cardRef"
              )
                .flex.column.q-mt-25
                  .form-title {{'Credit Card Number'}}
                  q-input(outlined mask="#### #### #### ####" unmasked-value v-model="formDataSecond.card" placeholder="2548 9841 2570 ****" type="text" :rules="[val => val && val.length > 0 || 'Enter a valid card number', val => /^\\d{16}$/.test(val) || 'Enter a valid card number']")
                    template(v-slot:prepend)
                      q-icon(name="card")
                .flex.column
                  .form-title {{'Name on Card'}}
                  q-input.q-mb-20(outlined v-model="formDataSecond.name" placeholder="Enter name on card" type="text" :rules="[]")
                    template(v-slot:prepend)
                      q-icon(name="user")
                .row.justify-between
                  .flex.column(:style="{width:  $q.screen.xs ? '100%' : '48%'}")
                    .flex.column.form-title {{'Expiry Date'}}
                    q-input.q-mb-20(outlined mask="##/##"
                      unmasked-value v-model="formDataSecond.date" placeholder="MM/YY" type="text")
                      template(v-slot:append)
                        q-icon(name="calendar" class="cursor-pointer")
                          q-popup-proxy(cover='' transition-show='scale' transition-hide='scale')
                            q-date(v-model='formDataSecond.date' mask="MM/YY")
                              .row.items-center.justify-end
                                q-btn(v-close-popup='' label='Close' color='primary' flat='')
                  .flex.column(:style="{width:  $q.screen.xs ? '100%' : '48%'}")
                    .form-title {{'Security Code'}}
                    q-input.q-mb-20(outlined mask="###"
                      unmasked-value v-model="formDataSecond.cvv" placeholder="CVV" type="text")
              q-checkbox.checkbox-item(v-model="formDataSecond.check" color="black" )
                slot
                  .text
                    | {{ 'By checking this box, I acknowledge that I have read and agree to the ' }}
                    span {{ 'Terms of Service'}}
                    | {{ ', and ' }}
                    span {{'Monthly Billing Terms '}}
                    | {{ 'of this website and want to opt-in for the monthly billed Dream Collection Club®' }}
            section.q-mt-xl
              .text-h4.sub-title.q-mb-xs {{ 'Billing Address' }}
              .text-subtitle2.sub-text.q-mb-md {{ 'Specify the address for your payment option' }}
              .flex.column.radio
                q-radio(v-model="checkBox" :val="1" label="Same as shipping address" color="black")
                q-radio(v-model="checkBox" :val="2" label="Use a different billing address" color="black")
              billing-address.q-mt-lg(v-if="checkBox === 2")
    q-btn(@click="onSubmit(router)" label="Continue to Payment" icon-right="east" flat).submit
  section.right(v-if="isTablet")
    basket-section
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {computed, onMounted, reactive, ref} from 'vue';
import BillingAddress from 'components/BillingAddress.vue';
import PaymentsCards from 'components/PaymentsCards.vue';
import {step, checkBox, onSubmit, userRef, cardRef, formData, lol} from 'src/composables/paymentActions';
import BasketSection from 'components/BasketSection.vue';
import ToggleComponent from 'components/ToggleComponent.vue';
import {useQuasar} from 'quasar';
import {useRouter} from 'vue-router';

const router = useRouter();

onMounted(() => {
  lol.basket = JSON.parse(localStorage.getItem('basket') || '[]');
  step.value = 1;
});

const {screen} = useQuasar();

const isTablet = computed(() => {
  return 1024 <= screen.width
})

const formDataSecond = reactive({
  card: null,
  name: null,
  date: null,
  cvv: null,
  check: false,
});
</script>

<style lang="scss" scoped>
.payment-content {
  gap: 70px;
  .left {
    width: 100%;
  }
  .right {
    width: 100%;
  }
  .q-mb-xl {
    margin-bottom: 50px;
    @media (max-width: $breakpoint-sm-max) {
      margin-bottom: 40px;
    }
    @media (max-width: $breakpoint-xs-max) {
      margin-bottom: 30px;
    }
  }
  .user-form {
    margin-bottom: 30px;
    @media (max-width: $breakpoint-sm-max) {
      margin-bottom: 20px;
    }
  }
  .q-mt-md {
    margin-top: 20px;
  }
  .q-stepper {
    &::v-deep(.q-stepper__header) {
      width: 250px;
      .q-stepper__tab:nth-child(1) {
        &.q-stepper__tab--active {
          .row.flex-center {
            &:before {
              content: "1";
            }
            color: var(--white);
          }
        }
      }
      .q-stepper__tab:nth-child(2) {
        &.q-stepper__tab--active {
          .row.flex-center {
            &:before {
              content: "2";
            }
            color: var(--white);
          }
        }
      }

      .q-stepper__tab {
        padding: 0;
        color: var(--text-color-second);
        .q-stepper__dot {
          position: relative;
          background: none;
          border: 1px solid var(--text-color-second);
          border-radius: 50%;
          color: var(--text-color-second);
          .row.flex-center {
            color: var(--text-color-second);
          }
        }
        &.q-stepper__tab--active {
          color: var(--midnight-express);
          .q-stepper__dot {
            position: relative;
            background: none;
            background: var(--midnight-express);
            border-radius: 50%;
            color: var(--midnight-express);
            i {
              display: none;
            }
          }
        }
      }
    }
    &::v-deep(.q-stepper__content) {
      overflow: inherit;
      .scroll {
        overflow: inherit;
      }
      .q-stepper__step-inner {
        padding: 0;
      }
    }
  }
  .q-field {
      margin-top: 10px;
    &::v-deep(.q-field__inner) {
      .q-field__control {
        border-radius: 16px;
        background: #f1f3f6;
        @media (max-width: $breakpoint-xs-max) {
          height: 46px;
          min-height: 46px;
          .q-field__marginal {
            height: 46px;
          }
        }
        &:before {
          border-color: #f1f3f6;
        }
        &.text-negative {
          background: rgba(245, 61, 107, 0.07);
          color: var(--radical-red) !important;
        }
        .q-icon.text-negative {
          display: none;
        }
      }
      .q-field__messages {
        color: var(--radical-red) !important;
      }
      .q-icon {
        width: 18px;
        height: 18px;
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
    @media (max-width: $breakpoint-sm-max) {
      width: 100%;
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
  .radio {
    margin-left: -10px;
  }
  .checkbox-item {
    align-items: flex-start;
    margin-left: -10px;
    &::v-deep(.q-checkbox__label) {
      padding-top: 5px;
    }
    .text {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: var(--text-color);
      span {
        font-weight: 600;
        color: var(--midnight-express);
      }
    }
  }
}
</style>
