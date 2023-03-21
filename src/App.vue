<template>
  <router-view />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';

const myIcons: any = {
  phone: `img:${require('src/assets/phone.svg')}`,
  email: `img:${require('src/assets/email.svg')}`,
  map: `img:${require('src/assets/map.svg')}`,
  user: `img:${require('src/assets/user.svg')}`,
  home: `img:${require('src/assets/home.svg')}`,
  building: `img:${require('src/assets/building.svg')}`,
  calendar: `img:${require('src/assets/calendar.svg')}`,
  card: `img:${require('src/assets/card.svg')}`,
  shop: `img:${require('src/assets/shop.webp')}`,
  paypal: `img:${require('src/assets/paypal.webp')}`,
  google: `img:${require('src/assets/google.webp')}`,
  'active-basket': `img:${require('src/assets/active-basket.svg')}`,
  basket: `img:${require('src/assets/basket.svg')}`,
  'map-marker-plus': `img:${require('src/assets/map-marker-plus.svg')}`,
  minus: `img:${require('src/assets/minus.svg')}`,
  lock: `img:${require('src/assets/lock.svg')}`,
  support: `img:${require('src/assets/support.svg')}`,
  pays: `img:${require('src/assets/pays.svg')}`,
  plus: `img:${require('src/assets/plus.svg')}`,
  complete: `img:${require('src/assets/complete.svg')}`,
};
const $q = useQuasar();

$q.iconMapFn = (iconName: any) => {
  const icon = myIcons[iconName];
  if (icon !== void 0) {
    return { icon };
  }
};
</script>
