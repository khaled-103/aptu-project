<template>
  <div class="home">
      <Header/>
      <intro/>
      <whoAreWe/>
      <whoIsShe />
      <programs/>
      <Featurs />
      <Reports />
      <clients />
      <about />
      <Contact/>
      <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import intro from '@/components/Home/intro.vue'
import whoAreWe from '@/components/Home/whoAreWe.vue'
import whoIsShe from '@/components/Home/whoIsShe.vue'
import programs from '@/components/Home/programs.vue'
import Featurs from '@/components/Home/Featurs.vue'
import Reports from '@/components/Home/Reports.vue'
import clients from '@/components/Home/clients.vue'
import about from '@/components/Home/about.vue'
import Contact from '@/components/Home/Contact.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'HomeView',
  components: {
    Header,
    intro,
    whoAreWe,
    whoIsShe,
    programs,
    Featurs,
    Reports,
    clients,
    about,
    Contact,
    Footer
  }
}
</script>
