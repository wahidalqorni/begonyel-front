<template>
    <div id="Succes">
        <div class="container">
            <Header />
            <div class="row justify-content-center mt-5">
                <div class="col-lg-4 text-center">
                    <img class="success-img animate__animated animate__rollIn" src="../assets/succcess.jpg" alt="">
                   <div class="animate__animated animate__lightSpeedInLeft"> <h3>Yeayy Berhasil</h3></div>
                    <div class="animate__animated animate__lightSpeedInLeft"><p class="text-ucapan">Kamu akan menerima pesananmu  Dalam Beberapa saat lagi</p></div>
                    <router-link to="/"><button class="btn btn-primary animate__animated animate__lightSpeedInLeft">Pesan Kembali</button></router-link>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: 'Succes',
    components: {
        Header,
        Footer
    } 
}
</script>

<style>
/* p{
    color: #EC982E;
} */

h3 {
    margin-top: 40px;
}

.btn-primary {
    border-radius: 50px;
    font-size: 15px;
    background-color: #EC982E;
    border: none;
}
</style>