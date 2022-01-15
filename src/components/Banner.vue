<template>
  <div id="Banner">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="Banner-Text my-6">
            <h6>FoodMarket</h6>
            <h1 class="my-3">
              Waktunya pilih menu <span> favorite</span> kamu
            </h1>
            <h6>mulai dari Rp 20.000</h6>
            <div class="row mt-4">
              
                <router-link to="List-Product"><button type="button" class="btn btn-light">Lihat menu</button></router-link>
                <router-link to="Product-Detail"><button type="button" class="btn btn-success ml-2">
                  Pesan <i class="fas fa-arrow-right"></i>
                </button></router-link>
              </div>
           
          </div>
        </div>
        <div class="col-lg-6">
          <div class="d-flex justify-content-end animate__animated animate__fadeInTopRight">
            <img
              src="../assets/bakso.png"
              alt="bakso"
             
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style>
</style>