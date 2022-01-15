<template>
    <div id="LandingPage">
        <!-- <h1>Ini adalah halaman Landing Page</h1> -->
        <Header/>
        <Banner/>
        <!-- <div class="mt-5"></div> -->
        <Carousel/>
        <div class="judul-menu">
            <div class="container my-3">
                <div class="row">
                    
                    <div class="col-lg-6 col-sm-6 col-6">
                       <h3> <b>menu</b> kami </h3>
                     </div>              
                    <div class="col-lg-6 col-sm-6 col-6 text-right">
                       <h3> <i class="far fa-eye"></i> Lihat Semua </h3>
                    </div>
                    
                </div>
            </div>
            
        </div>
        <BestProduct/>
        <Footer/>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Carousel from "@/components/Carousel.vue";
import BestProduct from '@/components/BestProduct.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "LandingPage",
  components: {
    Header,
    Banner,
    Carousel,
    BestProduct,
    Footer
  },
};
</script>
<style>
</style>