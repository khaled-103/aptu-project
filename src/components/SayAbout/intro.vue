<template>
  <div class="wraper">
    <h6>
      <router-link
        style="display: inline-block; color: #9753a0"
        :to="{ name: 'home' }"
        >الرئيسية</router-link
      ><span>/قالوا عنا</span>
    </h6>
    <div class="row">
      <div class="intro-text col-7">
        <h2 class="h2" style="color: #9753a0">قالوا عنا</h2>
        <p>
          في هذه الصفحة نستعرض لكم بعض من عملاءنا المميزين الذين أدلو بأراءهم
          حول خدمة آبتوس، هناك الكثير أيضاً من العملاء المعجبين بالخدمة ولكن في
          هذه المقام سنعرض بعض من كل، يمكنك تصفح الأراء ومشاهدة رأي كل عميل من
          عملاءنا حول خدماتنا المميزة في آبتوس
        </p>
      </div>
      <div class="col-5" style="margin-top: 50px">
        <img
          src="@/assets/images/sayAbout/say-about-intro.png"
          style="max-width: 100% !important"
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