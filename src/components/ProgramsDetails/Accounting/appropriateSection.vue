<template>
  <div class="holder py-2">
    <div class="wraper text-center">
      <div style="width: 80%; margin: auto" class="text-white">
        <h4>هل برنامج حسابات دفاتر مناسب لشركتي؟</h4>
        <p>
          هذا البرنامج مفيد للشركات التي لديها إدارة محاسبة مكونة من موظف واحد
          فأكثر وبصلاحيات مختلفة، وهو مثالي للإدارات التي يتوفر فيها مدير مالي،
          ورئيس أو عدة رؤساء حسابات و مجموعة من المحاسبين و التي بالتالي تحتاج
          لمستويين أو أكثر من الاعتمادات الإدارية وذلك لسهولة ضبط تدفق العمليات
          والأذونات المختلفة في دفاتر مما يعطيكم القوة اللازمة لضبط الحسابات
          المالية للشركة.
        </p>
        <p>
          إذا كانت شركتكم كذلك فننصح بجدولة عرض خاص بك مع أحد استشاريينا وذلك
          للحديث في كل التفاصيل الأخرى.
        </p>
      </div>
    </div>
    <div class="back"></div>
  </div>
</template>

<script>
export default {
  name: "appropriateSection",
};
</script>

<style scoped>
.holder {
  background: linear-gradient(to right, #9753a0, #3554a6);
  position: relative;
}
h4 {
  color: #111;
}
p {
  color: white;
}
.back {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-image: url("@/assets/images/about/section5-back.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom right;
}
</style>