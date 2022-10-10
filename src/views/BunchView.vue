<template>
  <Header />
  <intro />
  <bunches/>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import intro from "@/components/Bunch/intro.vue";
import bunches from "@/components/Bunch/bunches.vue";

import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    intro,
    bunches,
    Footer,
  },
};
</script>

<style>
</style>