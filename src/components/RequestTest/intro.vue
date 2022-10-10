<template>
  <div class="wraper">
    <h6>
      <router-link
        style="display: inline-block; color: #9753a0"
        :to="{ name: 'home' }"
        >الرئيسية</router-link
      ><span>/طلب تجربة</span>
    </h6>
    <div class="row">
      <div class="intro-text col-7">
        <h2 class="h2" style="color: #9753a0">طلب تجربة</h2>
        <p>
          نحرص في آبتوس على أن نتأكد من أن آبتوس ستحقق لك ما ترجوه، وأن تقوم
          بالتجربة الكاملة والحصول على إجابة كل استفساراتك بشكل شخصي قبل أن تبدأ
          معنا. بإمكانك تجربة الخدمة وأنظمتها بشكل كامل من خلال مشروع تجريبي
          مصغر (PoC) أو حساب مجاني يجهز لك لتجري عليه عمليات تجريبية أو حتى حجز
          أحد استشاريي الحلول المحاسبية المتوفرين لدينا للإجابة على ما تشاء،
          وذلك بعد إدخال بياناتك أدناه.
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