<template>
  <Header />
  <intro />
  <userManualItem/>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import intro from "@/components/UserManual/intro.vue";
import userManualItem from "@/components/UserManual/userManualItem.vue";

export default {
  components: {
    Header,
    intro,
    Footer,
    userManualItem
  },
};
</script>

<style scoped>
</style>