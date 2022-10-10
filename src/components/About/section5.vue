<template>
  <div class="holder">
    <div class="wraper text-center">
      <div style="width: 60%; margin:auto;" class="py-5 text-white">
        <h4>جولة سريعة على شاشات نظام آبتوس</h4>
        <p>
          مجموعة برامج آبتوس في لقطات بسيطة يمكنك مشاهدة شاشات دفاتر بشكل واقعي
          لا تنس طلب تجربة وسيقوم فريق الدعم بتسهيل الامر عليك طلب التجربة من
          خلال النقر على زر طلب تجربة
        </p>
      </div>
    </div>
    <div class="back"></div>
  </div>
</template>

<script>
export default {
  name: "section5",
};
</script>

<style scoped>
.holder{
    background: linear-gradient(to right,#9753a0,#3554a6);
    position: relative;
}
.back{
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-image: url('@/assets/images/about/section5-back.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right bottom;
}
</style>