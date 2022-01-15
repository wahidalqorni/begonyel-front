<template>
  <div id="ProductDetail">
    <!-- <h1>Ini adalah Halaman Product Detail</h1> -->
    <Danil />
    <Breadcrumb2 />
    <Carousel2 />
    <Carousel />
    <div class="judul-menu">
      <div class="container my-3">
        <div class="row">
          <div class="col-lg-6 col-sm-6 col-6">
            <h3>
              <b>menu</b>
              kami
            </h3>
          </div>
          <div class="col-lg-6 col-sm-6 col-6 text-right">
            <h3>
              <i class="far fa-eye"></i>
              Lihat Semua
            </h3>
          </div>
        </div>
      </div>
    </div>
    <Product />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Danil from '@/components/Danil.vue'
import Breadcrumb2 from '@/components/Breadcrumb2.vue'
import Carousel2 from '../components/Carousel2.vue'
import Product from '../components/Product.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Product-Detail',
  components: {
    Danil,
    Breadcrumb2,
    Carousel2,
    Product,
    Footer,
  },
}
</script>

<style></style>
