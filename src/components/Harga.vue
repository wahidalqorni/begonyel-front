<template>
  <div id="Harga">
    <div class="container">
      <h5><b>Total Harga</b>: Rp.20000</h5>
      <br />
      <div class="row justify-content-end">
        <div class="col-lg-4">
          <label>Nama Pemesan </label>
          <div class="input-group mb-2">
            <input
              type="text"
              class="form-control"
              id="inlineFormInputGroup"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-lg-4">
          <label>Nomor Meja </label>
          <div class="input-group mb-2">
            <input
              type="text"
              class="form-control"
              id="inlineFormInputGroup"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <div class="row justify-content-end">
          <div class="col-lg-2">
      <router-link to="/Succes" class="btn btn-primary animate__animated animate__lightSpeedInRight"
        >Pesan Sekarang </router-link>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>