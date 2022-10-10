<template>
  <div class="wraper">
    <h6>
      <router-link
        style="display: inline-block; color: #9753a0"
        :to="{ name: 'home' }"
        >الرئيسية</router-link
      ><span>/المزايا</span>
    </h6>
    <div class="row">
      <div class="intro-text col-7">
        <h2 class="h2" style="color: #9753a0">مزايا آبتوس</h2>
        <p>
          نستعرض لك مجموعة من المزايا والوظائف الرائعة في نظام دفاتر الجديد،
          نظام دفاتر مليء بالخواص والمزايا وفي هذه الصفحة نستعرض جزء منها، يمكنك
          الإطلاع عليها في الأسفل وهي مقسمة على شكل مجموعات لتسهل عليك تنصيفها
          والوصول إلى ما تحتاجه بسهولة
        </p>
      </div>
      <div class="col-5" style="margin-top: 50px">
        <img
          src="@/assets/images/featurs/intro.png"
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