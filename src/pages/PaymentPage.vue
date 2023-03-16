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
    section(v-if="isFirstStep")
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
      q-card(flat).q-mb-xl.flex.column
        .text-h4.sub-title {{ 'Shipping Address' }}
        .flex.column.q-mt-lg
          .form-title {{'Country of Origin'}}
          q-select.q-mt-md(standout v-model="formData.country" :options="options" label="Select your country")
            template(v-slot:prepend)
              q-img(src="../assets/map.svg" width="18px" height="18px")
        .row.justify-between.q-mt-md
          .flex.column(:style="{maxWidth: '262px', width: '50%'}")
            .flex.column.form-title {{'First Name *'}}
            q-input.q-mt-sm(standout v-model="formData.firstName" placeholder="Enter your first name" type="text" :dense="dense")
              template(v-slot:prepend)
                q-img(src="../assets/user.svg" width="18px" height="18px")
          .flex.column(:style="{maxWidth: '262px', width: '50%'}")
            .form-title {{'Last Name'}}
            q-input.q-mt-sm(standout v-model="formData.lastName" placeholder="Enter your last name" type="text" :dense="dense")
              template(v-slot:prepend)
                q-img(src="../assets/user.svg" width="18px" height="18px")
        .flex.column.q-mt-sm
          .form-title {{'Address *'}}
          q-input.q-mt-sm(standout v-model="formData.address" placeholder="Enter your address" type="text" :dense="dense")
            template(v-slot:prepend)
              q-img(src="../assets/home.svg" width="18px" height="18px")
        .row.justify-between.q-mt-md
          .flex.column(:style="{maxWidth: '262px', width: '50%'}")
            .flex.column.form-title {{'Apartment (optional)'}}
            q-input.q-mt-sm(standout v-model="formData.apartment" placeholder="Enter your apartment" type="text" :dense="dense")
              template(v-slot:prepend)
                q-img(src="../assets/building.svg" width="18px" height="18px")
          .flex.column(:style="{maxWidth: '262px', width: '50%'}")
            .form-title {{'Suit (optional)'}}
            q-input.q-mt-sm(standout v-model="formData.suit" placeholder="Enter your suit" type="text" :dense="dense")
              template(v-slot:prepend)
                q-img(src="../assets/building.svg" width="18px" height="18px")
        .row.justify-between.q-mt-md
          .flex.column(:style="{maxWidth: '262px', width: '50%'}")
            .flex.column.form-title {{'Post Code'}}
            q-input.q-mt-sm(standout v-model="formData.code" placeholder="Enter your post code" type="text" :dense="dense")
              template(v-slot:prepend)
                q-img(src="../assets/map-marker-plus.svg" width="18px" height="18px")
          .flex.column(:style="{maxWidth: '262px', width: '50%'}")
            .form-title {{'City'}}
            q-select.q-mt-sm(standout v-model="formData.city" :options="options" label="Select your city")
              template(v-slot:prepend)
                q-img(src="../assets/home.svg" width="18px" height="18px")
    section(v-if="isSecondStep")
      q-card(flat).q-mb-xl.flex.column
        .text-h4.sub-title  {{ 'Payment' }}
    q-btn(@click="onSubmit" label="Continue to Payment" icon-right="east" flat).submit
  .col-xs-12.col-sm-12.col-md-5.col-lg-5.col-xl-5
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {computed, onMounted, reactive, ref} from 'vue';
import {useQuasar} from 'quasar';

onMounted(() => {
  step.value = 1;
})

const items = ['shop', 'paypal', 'google'];

const step = ref(2);
const $q = useQuasar();

const accept = ref(false)
const dense = ref(false);
const options = ref(['Ukraine', 'USA']);

const isFirstStep = computed(() => {
  return step.value === 1;
})
const isSecondStep = computed(() => {
  return step.value === 2;
})

const formData = reactive({
  email: null,
  phone: null,
  country: null,
  firstName: null,
  lastName: null,
  address: null,
  apartment: null,
  suit: null,
  code: null,
  city: null,
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
}
</style>
