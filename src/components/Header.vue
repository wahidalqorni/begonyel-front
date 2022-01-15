<template>
  <div id="Header">
    <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-white mr-3 ">
     
      <!-- <div class="row">
        <div class="col-md-6">
          <img
            src="../assets/Group 50.png"
            alt="begonyel"
            width="210"
            height="auto"
          />
        </div>
        <div class="col-lg-2 text-right">Home</div>
        <div class="col-lg-2 text-right">Menu Makanan</div>
        <div class="col-lg-2 text-right">Keranjang<i class="fas fa-shopping-bag"></i></div>
      </div> -->
      
        <a class="navbar-brand" href="#"
          ><img
            src="../assets/Group 50.png"
            alt="logo"
            width="210"
            height="auto"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link to="/" class="nav-link" href="#"
                >Home <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link to="List-Product" class="nav-link" href="#">Menu Makanan</router-link>
            </li>
            <li class="nav-item">
            <router-link to="/Keranjang"  class="nav-link" href="#">Keranjang <i class="fas fa-shopping-bag"></i></router-link>
            </li>
            <li class="nav-item"></li>
          </ul>
        </div>
      
    
    </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>
