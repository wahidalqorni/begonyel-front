<template>
    <div id="Keranjang">
        <!-- <h1>Ini adalah Keranjang</h1> -->
        <Header/>
        <Breadcrumb3/>
        <Table/>
       <Harga/>
       <Footer/>


    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Breadcrumb3 from '../components/Breadcrumb3.vue'
import Table from '../components/Table.vue'
import Harga from '../components/Harga.vue'
import Footer from '../components/Footer.vue'

export default {
    name: "Keranjang",
    components: {
        Header,
        Breadcrumb3,
        Table,
        Harga,
        Footer
    }
}
</script>

<style>

</style>
