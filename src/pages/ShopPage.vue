<template lang="pug">
q-page.row.shop
  .col-xs-12.col-sm-12.col-md-8.col-lg-8.col-xl-8
    q-carousel.text-white.swipper.q-mb-lg(v-model='slide' transition-prev='slide-right' transition-next='slide-left' swipeable='' animated='' control-color='white' arrows='' height='520px')
      q-carousel-slide.column.no-wrap.flex-center(v-for="(item, index) in lol.basket" :name='index')
        q-img(:src='require(`src/assets/${item.img}.svg`)')
    q-card(flat bordered).q-pa-md.counts
      q-card-section.price
        q-item.wrap.content-center
          q-item-label.text-capitalize {{ 'Price:' }}
          q-item-label.price {{ "$" + activeItem.price }}
          q-item-label.sell {{ "-80%" }}
      q-card-section.quantity
        q-item.wrap.content-center
          q-item-label.text-capitalize {{ 'Quantity:' }}
          q-btn.bg-white(flat icon="minus" @click="activeItem.count--")
          q-item-label.price {{ activeItem.count }}
          q-btn.bg-white(flat icon="plus" @click="activeItem.count++")
    q-item.text.column
      q-item-label {{ 'Ornare rhoncus nunc ut felis. Faucibus dolor at ultrices tincidunt. Pulvinar sed justo et viverra pellentesque.' }}
      br
      br
      q-item-label {{ 'Mauris augue nulla proin vel a. Facilisis fringilla molestie dignissim elit orci malesuada. Lorem sit sagittis vitae nulla id. Mauris ipsum sed sed faucibus. Nulla amet metus gravida orci faucibus nisl eros arcu lorem. Nullam ornare molestie nam id gravida volutpat bibendum sem feugiat. Neque vulputate in et maecenas porta mi tellus. In massa porttitor urna quis volutpat at.' }}
    .row.justify-between.q-mb-xl.q-gutter-lg
      q-card.secure(flat bordered)
        q-card-section
          q-item
            q-icon(name="lock")
            q-item-label(v-html="'Guaranteed <span>Safe</span> & <span>Secure</span> Checkout'")
          q-item
            q-icon.pays(name="pays")
      q-card.support(flat bordered)
        q-card-section
          q-item
            q-icon(name="support")
            q-item-section
              q-item-label {{'24/7'}}
              q-item-label(caption) {{ 'Support' }}
    .buttons.column.content-center
      q-btn.send(flat :style="{width: '281px'}" label="Yes, I want" icon-right="east" @click="send")
      q-btn(flat :style="{width: '281px'}" label="No, Thanks")
</template>

<script setup lang="ts">
import {computed, ref} from 'vue';
import {lol} from 'src/composables/paymentActions';
import {useRouter} from 'vue-router';

const slide = ref(0)
const activeItem = computed(() => {
  return lol.basket[slide.value];
})
const router = useRouter();

const send = () => {
  lol.basket.forEach((item) => {
    if (item.count) {
      router.push({name: 'payment'})
    }
  })
}
</script>

<style scoped lang="scss">
.q-page.shop {
  display: flex;
  justify-content: center;
  &::v-deep(.swipper) {
    &.q-carousel {
      border-radius: 32px;
      .q-carousel__slide {
        padding: 0;
        background: white;
      }
      .q-btn {
        background: var(--white);
        opacity: 0.5;
        .q-icon {
          color: var(--text-color);
        }
      }
    }
  }
  .counts {
    margin-bottom: 40px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px !important;
    color: var(--midnight-express);
    border-radius: 16px;
    .price {
      .q-item {
        gap: 11px;
        align-items: center;
        justify-content: center;
        .text-capitalize {
          line-height: 30px !important;
        }
        .price {
          font-weight: 600;
          font-size: 30px;
          line-height: 40px;
        }
        .sell {
          line-height: 30px !important;
          padding: 3px 15px;
          background: #EFF0F5;
          border-radius: 8px;
        }
      }
    }
    .quantity {
      position: relative;
      overflow: hidden;
      margin: 0 auto;
      max-width: 520px;
      border-radius: 16px;
      &:before {
        content: "";
        display: block;
        opacity: 0.5;
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background: #EFF0F5;
      }
      .q-item {
        align-items: center;
        justify-content: center;
        .text-capitalize {
          margin-right: 40px;
          color: var(--text-color);
        }
        .q-btn {
          width: 57px;
          height: 50px;
          border-radius: 16px;
        }
        .price {
          margin: 0 30px;
          font-weight: 600;
        }
      }
    }
  }
  .q-item.text {
    margin-bottom: 40px;
    &::v-deep(.q-item__label) {
      font-size: 18px;
      line-height: 28px !important;
      letter-spacing: -0.1px;
      color: var(--text-color);
      &:nth-child(1) {
        font-weight: 500;
      }
    }
  }
  .secure {
    max-width: 394px;
    .q-icon {
      width: 24px;
      height: 24px;
      margin-right: 10px;
      &.pays {
        width: 100%;
        max-width: 315px;
        height: 24px;
      }
    }
    &::v-deep(.q-item__label) {
      font-weight: 400;
      font-size: 16px;
      line-height: 26px !important;
      span {
        font-weight: 500;
      }
    }
  }
  .support {
    max-width: 250px;
    .q-icon {
      width: 63px;
      height: 70px;
      margin-right: 33px;
    }
    .q-item__section {
      .q-item__label {
        margin: 0;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px !important;
        &:first-child {
          font-weight: 600;
        }
      }
    }
  }
  .buttons {
    .q-btn {
      text-transform: inherit !important;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px !important;
    }
    .send {
      height: 77px;
      font-size: 24px;
      line-height: 33px !important;
      border-radius: 16px;
      margin-bottom: 30px;
      background: var(--midnight-express);
      color: white;
    }
  }
}
</style>
