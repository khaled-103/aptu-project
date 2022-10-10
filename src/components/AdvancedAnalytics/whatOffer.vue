<template>
  <div class="holder text-white">
    <div class="wraper">
      <div class="row">
        <div class="col-md-4 col-12">
          <img
            src="@/assets/images/advancedAnalytics/whatOffer-img.png"
            alt=""
            style="max-width:100% !important;margin-top:15px;"
          />
        </div>
        <div class="col-md-8 col-12 mt-5 mr-5" style="">
          <h4 style="color: #f7c035" class="mb-4">ما الذي تقدمه آبتوس</h4>
          <p style="width:80%;">
            توفر آبتوس لعملائها القدرة على النفاذ الحي والمباشر لبياناتهم الحية
            في منصة آبتوس بدون تعقيدات وبدون بنى تحتية من خلال وصلة مايكروسوفت
            باور بي بحيث يتمكن المدراء التنفيذيون من تمثيل بياناتهم ودراستها
            وتحليلها رسومياً دون تعقيد أو تأخير، مما يمكن مدراء الأعمال
            والإدارات المختلفة من الدخول وتجهيز لوحات قياس لمتابعة أعمال الشركة
            بأي شكل كان.
          </p>
        </div>
      </div>
    </div>
    <div class="reports-back "></div>
  </div>
</template>

<script>
export default {
  name: "whatOffer",
};
</script>

<style scoped>
.holder {
  background: linear-gradient(to right, #9753a0, #3554a6);
  position: relative;
  padding: 2px 0;
}
.reports-back {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-position: bottom;
  background-image: url("@/assets/images/home/reports-back.png");
  background-repeat: no-repeat;
  background-size: contain;
}

</style>