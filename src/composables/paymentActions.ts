import {Screen} from 'quasar'
import {computed, reactive, ref} from 'vue';
import {useLolStore} from 'stores/example-store';
export const styles = () => {
  if (Screen.xs) {
    return 'padding: 0 16px; width: 100%';
  }
  if (Screen.md || Screen.sm) {
    return 'padding: 0 40px; width: 100%';
  }
}
export const step = ref(0);
export const checkBox = ref(1);
export const formData = reactive({
  email: null,
  phone: null,
});

export const userRef: any = ref(null);
export const cardRef: any  = ref(null);
export const addressRef: any  = ref(null);

export const lol = useLolStore();

export const totalPrice = computed(() => {
  return lol.basket.reduce((total, item) => {
    return total + Number(item.price) * item.count;
  }, 0);
})

export const onSubmit = (router: any) => {
  const inputs = document.getElementsByTagName('input');
  for (let index = 0; index < inputs.length; ++index) {
    inputs[index].focus();
  }
  if (step.value === 1) {
    addressRef.value.validate().then((success1: any) => {
      if (success1) {
        userRef.value.validate().then((success2: any) => {
          if (success2) {
            step.value++;
          }
        })
      }
    })
  }
  if (step.value === 2) {
    cardRef.value.validate().then((success1: any) => {
      if (checkBox.value === 2) {
        if (success1) {
          addressRef.value.validate().then((success2: any) => {
            if (success2) {
              router.push({name: 'ThankYouPage'});
            }
          })
        }
      } else {
        if (success1) {
          router.push({name: 'ThankYouPage'});
        }
      }
    })
  }
}
