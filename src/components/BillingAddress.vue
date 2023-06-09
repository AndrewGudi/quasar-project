<template lang="pug">
q-card(flat).flex.column
  q-form(
    ref="addressRef"
  )
    .text-h4.sub-title {{ 'Shipping Address' }}
    .flex.column.q-mt-25
      .form-title {{'Country of Origin'}}
      q-select(
        outlined
        v-model="formData.country"
        :options="options"
        label="Select your country"
        :rules="[val => val && val.length > 0 || 'Country is required']"
        )
        template(v-slot:prepend)
          q-icon(name="map")
    .row.justify-between.gap-section
      .flex.column(:style="{width: $q.screen.xs ? '100%' : '48%'}")
        .flex.column.form-title {{'First Name *'}}
        q-input.q-mb-20(outlined v-model="formData.firstName" placeholder="Enter your first name" type="text" :rules="[]")
          template(v-slot:prepend)
            q-icon(name="user")
      .flex.column(:style="{width:  $q.screen.xs ? '100%' : '48%'}")
        .form-title {{'Last Name'}}
        q-input.q-mb-20(outlined v-model="formData.lastName" placeholder="Enter your last name" type="text")
          template(v-slot:prepend)
            q-icon(name="user")
    .flex.column
      .form-title {{'Address *'}}
      q-input(
        outlined
        v-model="formData.address"
        placeholder="Enter your address"
        type="text"
        :rules="[val => val && val.length > 0 || 'Enter a valid address']"
        )
        template(v-slot:prepend)
          q-icon(name="home")
    .row.justify-between.gap-section
      .flex.column(:style="{width:  $q.screen.xs ? '100%' : '48%'}")
        .flex.column.form-title {{'Apartment (optional)'}}
        q-input.q-mb-20(
          outlined
          v-model="formData.apartment"
          placeholder="Enter your apartment"
          type="text"
          )
          template(v-slot:prepend)
            q-icon(name="building")
      .flex.column(:style="{width:  $q.screen.xs ? '100%' : '48%'}")
        .form-title {{'Suit (optional)'}}
        q-input.q-mb-20(outlined v-model="formData.suit" placeholder="Enter your suit" type="text")
          template(v-slot:prepend)
            q-icon(name="building")
    .row.justify-between.gap-section
      .flex.column(:style="{width:  $q.screen.xs ? '100%' : '48%'}")
        .flex.column.form-title {{'Post Code'}}
        q-input.q-mb-20(outlined v-model="formData.code" placeholder="Enter your post code" type="text")
          template(v-slot:prepend)
            q-icon(name="map-marker-plus")
      .flex.column(:style="{width:  $q.screen.xs ? '100%' : '48%'}")
        .form-title {{'City'}}
        q-select.q-mb-20(outlined v-model="formData.city" :options="options" label="Select your city")
          template(v-slot:prepend)
            q-icon(name="home")
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue';
import {addressRef} from 'src/composables/paymentActions';

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
    margin-top: 10px;
    .q-field__control {
      border-radius: 16px;
      background: #F1F3F6;
      @media (max-width: $breakpoint-xs-max) {
        height: 46px;
        min-height: 46px;
        .q-field__marginal {
          height: 46px;
        }
      }
      &:before {
        border-color: #F1F3F6;
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
</style>
