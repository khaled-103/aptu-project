<template>
  <div class="wraper text-center">
    <h4 class="mb-5">مميزات برنامج المحاسبة</h4>
    <div class="row">
      <div class="col-lg-3 col-md-6 col-12">
        <div class="featur">
          <i class="fa fa-gear"></i>
          <h6>قيود يومية متعددة الخيارات</h6>
          <p>
            إدخال القيود اليومية اصبح اكثر سهولة مع تعدد خيارات الادخال والقدرة
            على رفع المرفقات بالقيد لتصبح الدورة المستندية موثقة بالكامل
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-12">
        <div class="featur">
          <i class="fa fa-address-card"></i>
          <h6>دليل حسابات مرن جدا</h6>
          <p>
            التعديل على دليل الحسابات بحسب احتياجك وأكثر من دليل لأكثر من شركة و
            انشاء حسابات فرعية بعمق غير محدود
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-12">
        <div class="featur">
          <i class="fa fa-file-signature"></i>
          <h6>تقارير متعددة</h6>
          <p>
            قوالب تقارير جاهزة تناسب كافة احتياجاتك ودعم التقارير المتخصصة
            والمتقدمة مع إمكانية التصدير لأي صيغة
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-12">
        <div class="featur">
          <i class="fa fa-folder-open"></i>
          <h6>تعدد السنوات المالية</h6>
          <p>
            امكانية العمل على عدة سنوات مالية وامكانية ابقاء كل فتره مالية
            مفصولة تماما عن الفترات الاخرى
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "featurs",
};
</script>

<style scoped>
h4{
    color:#9753A0;
}
.featur {
  border: 1.5px solid rgb(224, 224, 224);
  border-radius: 15px;
  padding: 15px;
  height: 100%;
}
.col-12{
      margin-bottom: 10px;
}
.featur * {
  color: #555555;
}
p {
  opacity: 0.6;
  font-size: 15px;
}
i{
    font-size: 24px;
    margin-bottom: 8px;
}
</style>