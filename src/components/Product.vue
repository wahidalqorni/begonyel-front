<template>
  <div id="Product">
    <div class="container">
      <div class="col-auto">
        <label class="sr-only" for="inlineFormInputGroup">
          Mau makan apa??
        </label>
        <div class="input-group mb-2">
          <input
            v-model="keyword"
            @keyup="getListProduct"
            type="text"
            class="form-control"
            id="inlineFormInputGroup"
            placeholder="Mau makan apa hari ini??"
          />
          <div class="input-group-prepend">
            <div class="input-group-text"><i class="fas fa-search"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-3">
      <div class="row">
        <div class="col-lg-3 mb-3" v-for="lp in listproduct.data" :key="lp.id">
          <div class="animate__animated animate__fadeInDown">
            <div class="card" style="width: 100%;">
              <img
                v-if="lp.gambar != ''"
                :src="'http://127.0.0.1:8000/storage/' + lp.gambar"
                class="card-img-top"
                alt="nyel"
                style="height: 200px;"
              />

              <img
                v-else
                :src="'http://127.0.0.1:8000/storage/product-images/default.png'"
                class="card-img-top"
                alt="nyel"
                style="height: 200px;"
              />
              <div class="card-body text-center">
                <h5 class="card-title">
                  {{ lp.nama_produk }}
                  <br />
                  <small style="color: orange">{{ lp.nama_kategori }}</small>
                </h5>
                <p class="card-text mx-3">
                  Harga Rp. {{ Number(lp.harga).toLocaleString() }}
                </p>
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
  name: 'Product',
  // inisialiasasi variabel
  data() {
    return {
      keyword: '',
      response: {},
      listproduct: [],
    }
  },
  methods: {
    //   method/fungsi untuk mengubah isi variabel listproduct yg awalnya kosong
    setData(dataAPI) {
      this.listproduct = dataAPI
    },

    // method request data API
    async getListProduct() {
      try {
        if (this.keyword == '') {
          this.response = await axios.get(
            'http://127.0.0.1:8000/api/product-list',
          )
        } else {
          this.response = await axios.get(
            'http://127.0.0.1:8000/api/search-product?keyword=' + this.keyword,
          )
        }

        // panggil fungsi setData untuk mengisikan nilai ke variabe data
        this.setData(this.response.data) // kata data ini dpt dari console log crtl + shift + i d browser
        console.log(this.response.data)
      } catch (error) {
        console.error(error)
      }
    },
  },

  mounted() {
    this.getListProduct()
  },
}
</script>

<style></style>
