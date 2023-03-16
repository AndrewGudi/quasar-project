<template lang="pug">
q-card(flat).flex.column
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
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue';

const dense = ref(false);
const options = ref(['Ukraine', 'USA']);
const formData = reactive({
  country: null,
  firstName: null,
  lastName: null,
  address: null,
  apartment: null,
  suit: null,
  code: null,
  city: null,
})
</script>

<style scoped lang="scss">
.q-field {
  &::v-deep(.q-field__inner) {
    .q-field__control {
      border-radius: 16px;
    }
  }
}
</style>
