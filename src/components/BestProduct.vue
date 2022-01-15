<template>
  <div id="Product">
    <div class="container my-3">
      <div class="row">
        <div class="col-lg-3" v-for="bp in bestproduct.data" :key="bp.id">
          <div class="animate__animated animate__fadeInDown">
            <div class="card" style="width: 100%;">
              <img
              v-if="bp.gambar != ''"
                :src="'http://127.0.0.1:8000/storage/'+ bp.gambar"
                class="card-img-top"
                alt="nyel"
                style="height: 200px"
              />

              <img
              v-else
                :src="'http://127.0.0.1:8000/storage/product-images/default.png'"
                class="card-img-top"
                alt="nyel"
                style="height: 200px"
              />
              <div class="card-body text-center">
                <h5 class="card-title">{{ bp.nama_produk }} <br> <small> {{ bp.nama_kategori }} </small> </h5>
                <p class="card-text mx-3">Harga Rp {{ Number(bp.harga).toLocaleString() }}</p>
                <router-link to="/Product-Detail" class="btn btn-primary">
                  Pesan Sekarang
                  <i class="fas fa-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// package yg berfungsi untuk menghubungkan ke API
import axios from 'axios'

export default {
  name: 'BestProduct',

  // inisialiasasi variabel
  data() {
    return {
      response: {},
      bestproduct: [],
    }
  },
  methods: {
    //   method/fungsi untuk mengubah isi variabel bestproduct yg awalnya kosong
    setData(dataAPI) {
      this.bestproduct = dataAPI
    },

    // method request data API
    async getBestProduct() {
      try {
        this.response = await axios.get('http://127.0.0.1:8000/api/best-product')
        // panggil fungsi setData untuk mengisikan nilai ke variabe data
        this.setData(this.response.data) // kata data ini dpt dari console log crtl + shift + i d browser
        console.log(this.response.data)
      } catch (error) {
        console.error(error)
      }
    },

  },

  mounted() {
      this.getBestProduct()
  }

}
</script>

<style></style>
