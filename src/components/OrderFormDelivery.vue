<template>
<div>
  <b-card-title class="order-form__title text-center">Информация для доставки</b-card-title>
  <b-row class="mb-4">
    <b-col>
      <label for="input-live" class="order-form-input__label">Получатель</label>
      <b-form-input
        id="fioReceiver"
        placeholder="ФИО"
        v-model="deliveryReceiver.fioReceiver"
        @focus="inputHandler($event)"
      ></b-form-input>
    </b-col>
  </b-row>
  <b-row class="mb-3">
    <b-col>
      <label for="input-live" class="order-form-input__label">Адрес</label>
      <b-form-input
        id="cityReceiver"
        placeholder="Город"
        v-model="deliveryReceiver.cityReceiver"
        @focus="inputHandler($event)"
      ></b-form-input>
    </b-col>
  </b-row>
  <b-row class="mb-3">
    <b-col>
      <b-form-input
        v-model="deliveryReceiver.addressReceiver"
        id="addressReceiver"
        placeholder="Адрес"
        @focus="inputHandler($event)"
      ></b-form-input>
    </b-col>
  </b-row>
  <b-row class="mb-4">
    <b-col cols="7" class="pr-0">
      <select class="form-control" id="countyReceiver" v-model="deliveryReceiver.countyReceiver" @focus="inputHandler($event)">
        <option value="0" disabled>Страна</option>
        <option value="1">Российская федерация</option>
      </select>
    </b-col>
    <b-col cols="5">
      <b-form-input
        id="indexReceiver"
        v-model="deliveryReceiver.indexReceiver"
        placeholder="Индекс"
        @focus="inputHandler($event)"
      ></b-form-input>
    </b-col>
  </b-row>
</div>
</template>

<script>

export default {
  name: 'OrderFormDelivery',
  props: {
    checkReceiverData: { type: Boolean }
  },
  data() {
    return {
      errors: [],
      deliveryReceiver: {
        fioReceiver: '',
        cityReceiver: '',
        countyReceiver: '0',
        addressReceiver: '',
        indexReceiver: '',
      },
      dataValidation: false
    }
  },
    watch: {
      checkReceiverData: function () {
        this.checkForm()
      },
      errors: function (val) {
        for(let errorItem in val){
          document.getElementById(val[errorItem]).classList.add('input-error')
        }
      },
  },
  mounted() {
    this.$root.$on('test', function() {
      this.dataValidation = true
    })
  },
  methods: {
    inputHandler(e){
      e.target.classList.remove('input-error')
    },
    checkForm() {
      this.errors = []
      for(let item in this.deliveryReceiver){
        if(this.deliveryReceiver[item] == '' || this.deliveryReceiver[item] == 0){
          this.errors.push(item)
        }
      }
      if(
        this.deliveryReceiver.fioReceiver != '' &&
        this.deliveryReceiver.cityReceiver != '' &&
        this.deliveryReceiver.countyReceiver != '0' &&
        this.deliveryReceiver.addressReceiver != '' &&
        this.deliveryReceiver.indexReceiver != ''
        ){
        this.$emit('successCheckReceiverData', true)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.input-error {
  border-color: red !important;
}
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