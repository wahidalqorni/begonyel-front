<template>
  <div class="container">
    <div id="Breadcrumb">
      <div class="row">
        <div class="col-lg-6">
          <nav aria-label="breadcrumb" style="width:100% Height:30px">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/">
                  <i class="fas fa-home"></i>
                  Home
                </router-link>
              </li>
              <li class="breadcrumb-item"><a href="#">ProductDetails</a></li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb2',
}
</script>

<style></style>
