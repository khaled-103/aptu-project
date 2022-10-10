<template>
  <Header/>
  <intro/>
  <formRequest/>
  <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import intro from '@/components/RequestTest/intro.vue'
import formRequest from '@/components/RequestTest/formRequest.vue'


export default {
    components:{
        Header,
        intro,
        formRequest,
        Footer
    }
}
</script>

<style>

</style>