<template>
  <div class="about">
    <Header />
    <intro />
    <section1/>
    <section2/>
    <section3/>
    <section4/>
    <section5/>
    <!-- <section6/> -->

    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import intro from '@/components/Featurs/intro.vue'
import section1 from '@/components/Featurs/section1.vue'
import section2 from '@/components/Featurs/section2.vue'
import section3 from '@/components/Featurs/section3.vue'
import section4 from '@/components/Featurs/section4.vue'
import section5 from '@/components/Featurs/section5.vue'
// import section6 from '@/components/Featurs/section6.vue'






export default {
  name: 'FeatursView',
  components: {
    Header,
    Footer,
    intro,
    section1,
    section2,
    section3,
    section4,
    section5
  }
}
</script>
