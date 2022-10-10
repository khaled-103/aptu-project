<template>
  <div class="wraper">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-12 mb-3">
        <i class="fa-solid fa-layer-group iconHolder"></i>
        <h6>محرك المطابقة القانونية</h6>
        <p>
          لا داعي لمتابعة وثائق المنشأة القانونية الآن بشكل يدوي، إذ تساعدك هذه
          الميزة على متابعة تواريخ وصلاحية كامل وثائق المنشأة الإدارية
          والقانونية المهمة
        </p>
      </div>
      <div class="col-lg-4 col-md-6 col-12 mb-3">
        <i class="fa fa-language iconHolder"></i>
        <h6>واجهة متعددة اللغات</h6>
        <p>
          يمكن استخدام دفاتر باللغتين العربية والانجليزية مع القدرة على التنقل
          اللحظي لوجهة الاستخدام بين اللغتين
        </p>
      </div>
      <div class="col-lg-4 col-md-6 col-12 mb-3">
        <i class="fa-solid fa-star-and-crescent iconHolder"></i>
        <h6>تقارير تحليل الأعمال (BI)</h6>
        <p>
          توفر لك دفاتر نوعين من تقارير تحليل (ذكاء) الأعمال. النوع القياسي وهو
          متوفر في دفاتر المحاسبة، وغيرها كما توفر إمكانية للربط ببرامج ذكاء
          الأعمال المتقدمة
        </p>
      </div>
      <div class="col-lg-4 col-md-6 col-12 mb-3">
        <i class="fa fa-bell iconHolder"></i>
        <h6>محرك إشعارات وتنبيهات</h6>
        <p>
          يمكنك من خلال هذه الأداة ربط عدد لا محدود من التنبيهات والاشعارات عن
          طريق الرسائل البريد الالكتروني بأي حدث أو تاريخ في أي وثيقة من وثائق
          المنشأة، كتواريخ تسديد الفواتير أو استلام المشتريات أو تسليم الطلبيات
          للعملاء .
        </p>
      </div>
      <div class="col-lg-4 col-md-6 col-12 mb-3">
        <i class="fa-solid fa-file-alt iconHolder"></i>
        <h6>مولد التقارير العام</h6>
        <p>
          وفرنا في دفاتر مولد تقارير مرن يمكن من خلاله استخراج أي معلومة يحتاجها
          مستخدم النظام، مع إمكانية حفظ هذه التقارير لاستخدامها لاحقا دون الحاجة
          لإعادة تصميمها
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/button.vue";
export default {
  name: "Featurs",
  components: {
    Button,
  },
};
</script>

<style scoped>
.iconHolder {
  background: linear-gradient(to right bottom, #9753a0, #3554a6);
  color: white;
  border-radius: 50%;
  padding: 15px;
}
div p {
  opacity: 0.6;
}
h6 {
  color: #9753a0;
  margin: 10px 0;
}
</style>