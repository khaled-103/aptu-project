<template>
  <Header />
  <intro />
  <formTechnical/>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import intro from "@/components/TechnicalSupport/intro.vue";
import formTechnical from "@/components/TechnicalSupport/formTechnical.vue";


export default {
  components: {
    Header,
    intro,
    formTechnical,
    Footer,
  },
};
</script>

<style>
</style>