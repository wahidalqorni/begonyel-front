<template>
  <div id="Carousel2">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators justify-content-center">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner mt-2">
              <div class="carousel-item active p-2">
                <img
                  src="../assets/nasi-begonyel.jpg"
                  class="d-block w-100"
                  alt="51"
                />
              </div>
              <div class="carousel-item p-2">
                <img
                  src="../assets/sate-begonyel.jpg"
                  class="d-block w-100"
                  alt="51"
                />
              </div>
              <div class="carousel-item p-2">
                <img
                  src="../assets/sate-begonyel.jpg"
                  class="d-block w-100"
                  alt="51"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <i class="fas fa-arrow-circle-left"></i>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <i class="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-8 ">
          <h1>Nasi Ayam Klenger</h1>
          <p>Harga: Rp. 20000</p>
          <form v-on:submit.prevent>
            <div class="form-group">
              <label for="exampleFormControlInput1">Jumlah</label>
              <input
                type="number"
                value="0" min="1" max=""
                class="form-control"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput">Keterangan</label>
              <textarea
                type="number"
                rows="2"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="makanla yang pedas-pedas"
              />
            </div>
             <button
              type="submit"
              class="btn btn-warning text-light"
              
            >
              <!-- <b-icon-cart></b-icon-cart> -->
              Masukkan Ke Keranjang
            </button>
          </form>
         
        </div>
        </div>
      </div>
    </div>
 
</template>

<script>
export default {
  name: "Carousel2",
};
</script>

<style>
</style>