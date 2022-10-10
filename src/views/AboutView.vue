<template>
  <div class="about">
    <Header />
    <intro />
    <section2/>
    <section3/>
    <section4/>
    <section5/>
    <section6/>
    <section7/>

    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import intro from '@/components/About/intro.vue'
import section2 from '@/components/About/section2.vue'
import section3 from '@/components/About/section3.vue'
import section4 from '@/components/About/section4.vue'
import section5 from '@/components/About/section5.vue'
import section6 from '@/components/About/section6.vue'
import section7 from '@/components/About/section7.vue'






export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    intro,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7

  }
}
</script>
