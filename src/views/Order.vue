<template>
  <div class="order">
    <div class="order-form">
      <b-card
        class="order-form__card"
        no-body
      >
        <b-card-body class="order-form__body">
          <b-breadcrumb class="order-form__breadcrumb">
            <b-breadcrumb-item :class="indexForm == false ? 'active' : ''">Доставка</b-breadcrumb-item>
            <b-breadcrumb-item :class="indexForm == true ? 'active' : ''">Оплата</b-breadcrumb-item>
          </b-breadcrumb>
          <order-form-delivery :checkReceiverData="checkReceiverData" @successCheckReceiverData="indexForm = true" v-if="indexForm == false"/>
          <order-form-payment ref="cardPayment" v-else />
          <b-row>
            <b-col>
                <b-button variant="success" :pressed.sync="checkReceiverData" v-if="indexForm == false">Продолжить</b-button>
                <b-button variant="success" v-else>Оплатить</b-button>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
import OrderFormDelivery from '../components/OrderFormDelivery.vue'
import OrderFormPayment from '../components/OrderFormPayment.vue'

export default {
  name: 'Order',
  components: {
    OrderFormDelivery,
    OrderFormPayment
  },
  data() {
    return {
      checkReceiverData: false,
      indexForm: false
    }
  },
  watch: {
    
  },
  mounted(){
 
  },
  methods: {
    checkFormReceiverData(){
      this.$root.$emit('test')
    }
  }
}
</script>


