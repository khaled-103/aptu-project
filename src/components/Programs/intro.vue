<template>
  <div class="wraper">
    <h6>
      <router-link
        style="display: inline-block; color: #9753a0"
        :to="{ name: 'home' }"
        >الرئيسية</router-link
      ><span>/البرامج</span>
    </h6>
    <div class="row">
      <div class="intro-text col-7">
        <h2 class="h2" style="color: #9753a0">برامج آبتوس</h2>
        <p>
          تحتوي آبتوس على العديد من البرامج والنظم المتكاملة فيما بينها، تشكل في مجموعها حلا شاملا لأغلب احتياجات المنشأة المالية والإدارية، تعرف على أهم هذه البرامج والنظم هنا
        </p>
      </div>
      <div class="col-5" style="margin-top: 50px">
        <img
          src="@/assets/images/programs/programs-back.png"
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