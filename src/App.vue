<template>
  <!-- <Header></Header> -->
  <ProductList></ProductList>
</template>

<script>
import Header from "./components/Header.vue";
import ProductList from "./components/ProductList.vue";


export default {
  data() {
    return {};
  },
  // declaration of external components using in current components
  components: {
    Header,  
    ProductList,  
    
  },
}
</script>

<style>

</style>