<template>
  <div class="wraper">
    <h6><router-link style="display:inline-block; color:#9753a0;" :to="{name: 'home'}">الرئيسية</router-link><span>/من نحن</span></h6>
    <div class="row">
      <div class="intro-text col-7">
        <h2 class="h2" style="color: #9753a0">جولة في آبتوس</h2>
        <p>
          تساعد آبتوس المنشآت التجارية المتوسطة قبل الصغيرة في إدارة العمليات
          المالية والإدارية المختلفة بأقل جهد وتكلفة مقارنة بالأنظمة العالمية
          الأخرى
        </p>
      </div>
      <div class="col-5" style="margin-top: 50px">
        <img
          src="@/assets/images/about/intro-back.png"
          style="width: 100% !important"
          alt="intro back"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "intro",
  components: {},
};
</script>

<style scoped>
.intro-text {
  margin-top: 15%;
}
</style>