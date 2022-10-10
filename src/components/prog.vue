<template>
  <div class="text-center wraper">
    <div class="row">
        <router-link class="col-lg-3 col-md-6 col-12 mb-3" :to="{name:'accountingProgram'}">
          <div class="program">
            <i class="fa-sharp fa-solid fa-money-bill-wave"></i>
            <h5>المحاسبة</h5>
            <p>
              كل ما يتعلق بأمورك المالية وكل ما يرغب محاسبك في تقييده، تابع
              أرصدتك واستخرج تقاريرك المالية وحلل مصاريفك وإيراداتك
            </p>
          </div>
        </router-link>

      <div class="col-lg-3 col-md-6 col-12 mb-3">
        <div class="program">
          <i class="fa fa-users"></i>
          <h5>شؤون الموظفين</h5>
          <p>
            الحضور والانصراف إلى الرواتب، والاجازات، وكل وثائق الموظفين، برنامج
            موارد بشرية متوافق مع أنظمة الوزارات
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-12 mb-3">
        <div class="program">
          <i class="fa fa-shop"></i>
          <h5>المبيعات</h5>
          <p>
            أدر دورة البيع من التسعير إلى الفوترة، واربط ما تم تسديده لك
            بالفواتير الصادرة أو قيد ما تبقى لك على عملائك مع كامل بياناتهم
            وبيانات تواصلك معهم
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-12 mb-3">
        <div class="program">
          <i class="fa fa-shopping-bag"></i>
          <h5>المشتريات</h5>
          <p>
            إدر كل ما يتعلق بدورة المشتريات، من بيانات الموردين، مستحقاتهم، ماتم
            دفعه لهم وما تبقى، كل ما قمت بشراءه يتم تقييده وتصنيفه
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-12 mb-3">
        <div class="program">
          <i class="fa fa-users"></i>
          <h5>خدمة العملاء</h5>
          <p>
            قيد شكاوى العملاء والرد عليها، وجداول الصيانة ومعلومات الضمان
            وزيارات العملاء بشكل سلس ومركزي
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-12 mb-3">
        <div class="program">
          <i class="fa-sharp fa-solid fa-diagram-project"></i>
          <h5>المشاريع</h5>
          <p>
            يساعد المنشآت الخدمية، كشركات المقاولات وخدمات الصيانة من تقييد عدد
            المهام وساعات العمل على المشاريع وربطها بالعملاء
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-12 mb-3">
        <div class="program">
          <i class="fa fa-gear"></i>
          <h5>التصنيع</h5>
          <p>
            إدارة كامل عملية التصنيع للورش والمصانع الصغيرة ومحطات العمل وتدفق
            المواد الخام والهدر، بكل وضوح وسلاسة
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-12 mb-3">
        <div class="program">
          <i class="fa fa-truck"></i>
          <h5>مخازن ومستودعات</h5>
          <p>
            متابعة رصيد المخزون وحركة الأصناف، وعمليات الجرد أصبحت سهلة جدا، كل
            أصنافك مصورة ومرقمة بشكل دقيق ومربوطة بمتجرك الالكتروني
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "prog",
};
</script>

<style scoped>
.program {
  background: white;
  border-radius: 20px;
  color: #555555;
  transition: 0.5s;
  padding: 15px;
  cursor: pointer;
  height: 100%;
  border: 1px solid #d6d6d6;
}
.program p {
  opacity: 0.6;
}
.program:hover {
  color: white;
  background: #9753a0;
}
.program:hover p {
  opacity: 1;
}
i {
  margin-bottom: 10px;
  font-size: 24px;
}
</style>