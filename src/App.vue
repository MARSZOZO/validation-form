<template>
  <div id="app">
    <b-container fluid class="m-0 p-0">
        <header-zozo />
        <router-view/>
    </b-container>
  </div>
</template>

<script>
import Header from './components/templates/Header'

export default {
  components : {
    'header-zozo' : Header
  },
  data() {
    return {

    }
  }
}
</script>


<style lang="scss">
@import '~bootstrap/scss/bootstrap';
@import '~bootstrap-vue/src/index.scss';

.bg-light {
  background-color: #ffffff !important;
}
.order {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: auto;
}
.order-form {
  width: 400px;
  height: 520px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -250px 0 0 -200px;
}
.order-form__card {
  border: none !important;
  border-radius: 24px !important;
  box-shadow: 0px 0px 10px #EBF0FF;
}
.order-form__body {
    padding: 40px !important;
}
.order-form__breadcrumb {
    display: flex;
    flex-wrap: wrap;
    padding: 0 !important;
    margin-bottom: 1rem;
    list-style: none;
    background-color: transparent !important;
    border-radius: 0.25rem;
    font-size: 12px;
}
.breadcrumb-item.active > a {
    color: #101D94!important;
    cursor: text !important;
}
.breadcrumb-item > a {
  color: #c4c4c4 !important;
  cursor: text !important;
}
.btn-success {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
    padding: 12px 40px !important;
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a:hover {
  text-decoration: none !important;
}
body {
    background-color: #F7F8FF;
}
</style>
