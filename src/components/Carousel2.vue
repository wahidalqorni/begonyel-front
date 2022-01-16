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
        <div class="col-lg-8">
          <h1>{{ product.data.nama_produk }}</h1>
          <p>Harga: Rp. {{ Number(product.data.harga).toLocaleString() }}</p>
          <form v-on:submit.prevent>
            <div class="form-group">
              <label for="exampleFormControlInput1">Jumlah</label>
              <input
                v-model="jumlah_beli"
                type="number"
                value="0"
                min="1"
                max=""
                class="form-control"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput">Keterangan</label>
              <textarea
                v-model="keterangan"
                type="number"
                rows="2"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="makanla yang pedas-pedas"
              />
            </div>
            <button @click="postKeranjang()" type="submit" class="btn btn-warning text-light">
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
// package yg berfungsi untuk menghubungkan ke API
import axios from 'axios'

export default {
  name: 'Carousel2',

  // untuk menyimpan variabel2
  data() {
    return {
      response: {},
      product: {},
      jumlah_beli: 0,
      keterangan: '',
    }
  },

  // untuk membuat method/fungsi
  methods: {
    // setData (untuk mengubah isi dari variabel product)
    setData(dataAPI) {
      this.product = dataAPI
    },

    // menampilkan data product sesuai id yg dipilih
    async detailProduct() {
      try {
        this.response = await axios.get(
          'http://127.0.0.1:8000/api/detail-product/' + this.$route.params.id,
        )
        // panggil fungsi setData untuk mengisikan nilai ke variabe data
        this.setData(this.response.data) // kata data ini dpt dari console log crtl + shift + i d browser
        console.log(this.response.data)
      } catch (error) {
        console.error(error)
      }
    },

    // mengirim data dari form detail ke database tabel detailpemesanans
    async postKeranjang() {
      try {
        if (this.jumlah_beli > 0) {

          this.response = await axios.post(
            'http://127.0.0.1:8000/api/keranjang-post',
            {
              product_id: this.$route.params.id,
              jumlah_beli: this.jumlah_beli,
              keterangan: this.keterangan,
            },
          )

          if (this.response.data.success == true) {
            this.$router.push({ path: '/Keranjang' })
          }

        }

        console.log(this.response.data)
      } catch (error) {
        console.error(error)
      }
    },
  },

  // fungsi untuk saat halaman dimuat, method apa dulu yg diakses
  mounted() {
    this.detailProduct()
  },
}
</script>

<style></style>
