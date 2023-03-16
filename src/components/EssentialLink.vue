<template lang="pug">
q-item(clickable='' tag='a' target='_blank' :href='link')
  q-item-section(v-if='icon' avatar='')
    q-icon(:name='icon')
  q-item-section
    q-item-label {{ title }}
    q-item-label(caption='') {{ caption }}
</template>

<script setup lang="ts">
interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
}
withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  link: '#',
  icon: '',
});
</script>
