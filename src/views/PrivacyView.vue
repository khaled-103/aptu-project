<template>
    <Header/>
    <intro/>
    <preamble/>
    <defintion/>
    <conditions/>
    <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import intro from '@/components/PrivacyPolicy/intro.vue'
import preamble from '@/components/PrivacyPolicy/preamble.vue'
import defintion from '@/components/PrivacyPolicy/defintion.vue'
import conditions from '@/components/PrivacyPolicy/conditions.vue'



import Footer from '@/components/Footer.vue'
export default {
components:{
    Header,
    intro,
    preamble,
    defintion,
    conditions,
    Footer
}
}
</script>

<style>

</style>