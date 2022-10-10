<template>
  <Header />
  <intro />
  <h5 style="color:#3554A6;width:50%; margin:auto;" class="text-center">
    تتيح وصلة باور بي آي PowerBI من آبتوس لعملائها قيمة حقيقية للشركات تمكنهم من
    خلالها من النفوذ المباشر دون تعقيدات لبياناتهم الحية على منصة آبتوس مباشرة.
  </h5>
  <whatIs/>
  <msPower/>
  <whatOffer/>
  <howWork/>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import intro from "@/components/AdvancedAnalytics/intro.vue";
import whatIs from "@/components/AdvancedAnalytics/whatIs.vue";
import msPower from "@/components/AdvancedAnalytics/msPower.vue";
import whatOffer from "@/components/AdvancedAnalytics/whatOffer.vue";
import howWork from "@/components/AdvancedAnalytics/howWork.vue";





export default {
  components: {
    Header,
    Footer,
    intro,
    whatIs,
    msPower,
    whatOffer,
    howWork
  },
};
</script>

<style scoped>
</style>