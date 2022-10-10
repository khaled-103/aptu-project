<template>
    <div class="wraper">
      <div class="row">
        <div class="intro-text col-7">
        <h2 class="h2" style="color:#9753A0;">حقق النمو الذي تطمح له وأدره بكفاءة</h2>
        <p>
          اهتم بالتفاصيل التجارية واترك لنا التفاصيل التقنية لإدارة منظومة
          تطبيقاتك الأساسية وحقق التكامل التشغيلي بين الإدارات المختلفة في شركتك
        </p>
        <router-link :to="{name:'requestTest'}">
          <Button text="جرب الآن" />
        </router-link>
        
      </div>
      <div class="col-5" style="margin-top:50px;">
        <img src="@/assets/images/home/intro-back.png" style="width:100% !important;" alt="intro back" />
      </div>
      </div>
    </div>
</template>

<script>
import Button from "../button.vue";
export default {
  name: "intro",
  components: {
    Button,
  },
};
</script>

<style scoped>


.intro-text{
    margin-top: 15%;
}
</style>