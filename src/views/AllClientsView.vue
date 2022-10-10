<template>
  <Header />
  
  <all-clients />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import AllClients from "@/components/AllClients.vue";
export default {
  components: {
    Header,
    Footer,
    AllClients,
  },
};
</script>

<style scoped>
</style>