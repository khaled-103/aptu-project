<template>
  <Header />
  <intro/>
  <prog/>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import prog from '@/components/prog.vue';
import intro from '@/components/Programs/intro.vue';

export default {
  components: {
    Header,
    Footer,
    prog,
    intro
  },
};
</script>

<style scoped>
</style>