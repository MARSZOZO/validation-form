<template>
<div>
  <b-card-title class="order-form__title text-left">Оплата</b-card-title>
  <label for="input-live" class="order-form-input__label">Имя на карте</label>
  <b-form-input
    id="input-live"
    placeholder="Ivan Ivanov"
    class="mb-4"
    v-model="nameCard"
  ></b-form-input>
  <label for="input-live" class="order-form-input__label">Номер карты</label>
  <b-form-input
    id="input-live"
    placeholder="XXXX XXXX XXXX XXXX"
    class="mb-4"
    v-model="numberCard"
  ></b-form-input>
  <b-row class="mb-4">
    <b-col cols="7" class="pr-0">
      <label for="input-live" class="order-form-input__label">Срок</label>
      <b-form-input
        id="input-live"
        placeholder="MM/YY"
        class="mb-4"
        v-model="dateCard"
      ></b-form-input>
    </b-col>
    <b-col cols="5">
      <label for="input-live" class="order-form-input__label">CVV</label>
      <b-form-input
        id="input-live"
        class="mb-4"
        v-model="cvvCard"
      ></b-form-input>
    </b-col>
  </b-row>
</div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  name: 'OrderFormDelivery',
  data() {
    return {
      nameCard: '',
      numberCard: '',
      dateCard: '',
      cvvCard: ''
      
    }
  },
  validations: {
    nameCard: {
      required
    },
    numberCard: {
      required,
      minLength: minLength(12)
    },
    dateCard: {
      required
    },
    cvvCard: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(4)
    }
  }
}
</script>

<style scoped lang="scss">
.order-form__title {
  font-weight: 300;
  font-size: 25.4px !important;
  line-height: 31px;
  color: #101D94;
}
.order-form-input__label {
  font-size: 16px !important;
  line-height: 18px;
  color: #101D94;
}
</style>