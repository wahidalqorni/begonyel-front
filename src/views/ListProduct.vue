<template>
  <div id="ListProduct">
    <!-- <h1>Ini adalah halaman List Product</h1> -->
    <Danil />
    <Breadcrumb />
    <!-- <Forms /> -->
    <Product />
    
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Danil from '@/components/Danil.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
// import Forms from '@/components/Forms.vue'
import Product from '@/components/Product.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ListProduct',
  components: {
    Danil,
    Breadcrumb,
    // Forms,
    Product,
    Footer,
  },
}
</script>

<style></style>
