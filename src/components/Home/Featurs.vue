<template>
  <div class="text-center wraper">
    <h2 style="color: #9753a0" class="">المزايا الرئيسية</h2>
    <h6 style="color: #3554a6; margin:20px 0 60px 0;">اليك ما يميزنا عن غيرنا</h6>
    <div class="row">
      <div class="col-lg-3 col-md-6 col-12 mb-3">
        <i class="fa fa-message iconHolder"></i>
        <h6>منصة تعاون وتشارك</h6>
        <p>
          التعليق والتوسيم. الإسناد والتكليف محرك سير الأعمال (Workflow) الأرشفة
          الإلكترونية
        </p>
      </div>
      <div class="col-lg-3 col-md-6 col-12 mb-3">
        <i class="fa-solid fa-puzzle-piece iconHolder"></i>
        <h6>الربط والتكامل</h6>
        <p>
          أجهزة خارجية (POS/T&A) قنوات الدفع الالكتروني بوابة الرسائل القصيرة
          مكتبة الربط البرمجي (API)
        </p>
      </div>
      <div class="col-lg-3 col-md-6 col-12 mb-3">
        <i class="fa-solid fa-shield iconHolder"></i>
        <h6>أمن المعلومات</h6>
        <p>
            كلمات سر المرة الواحدة (OTP) التشفير الكامل (SSL) النسخ الاحتياطي الشخصي (DropBox)
        </p>
      </div>
      <div class="col-lg-3 col-md-6 col-12 mb-3">
        <i class="fa-solid fa-building iconHolder"></i>
        <h6>متعدد الشركات</h6>
        <p>
            أدر عدة شركات منفصلة أو مرتبطة وأعمالك فيها من مكان واحد ومن خلال حساب واحد
        </p>
      </div>
      <div class="col-lg-3 col-md-6 col-12 mb-3">
        <i class="fa fa-building iconHolder"></i>
        <h6>متعدد الأنشطة</h6>
        <p>
            مهما كان نوع نشاط شركتك، التجزئة، أو الخدمات، أو التصنيع، أو مبيعات الجملة والتوزيع
        </p>
      </div>
      <div class="col-lg-3 col-md-6 col-12 mb-3">
        <i class="fa-solid fa-certificate iconHolder"></i>
        <h6>صلاحيات مرنة ومحكمة</h6>
        <p>
            بحسب الشركة والنشاط، نفس الشخص يمكنه تأدية أدوار مختلفة بصلاحيات مختلفة من نفس الحساب
        </p>
      </div>
      <div class="col-lg-3 col-md-6 col-12 mb-3">
        <i class="fa-solid fa-star iconHolder"></i>
        <h6>التخصيص الكامل</h6>
        <p>
            جميع الشاشات والنماذج وإجراءات العمل والمخرجات قابلة للتخصيص لتوائم احتياجك وذوقك
        </p>
      </div>
      <div class="col-lg-3 col-md-6 col-12 mb-3">
        <i class="fa-solid fa-ellipsis iconHolder"></i>
        <h6>مزايا هامة أخرى</h6>
        <p>
            محرك المطابقة القانونية - واجهة متعددة اللغات - محرك إشعارات وتنبيهات - تقارير تحليل الأعمال (BI)
        </p>
      </div>
    </div>
    <Button text="المزيد"/>
  </div>
</template>

<script>
import Button from '@/components/button.vue'
export default {
  name: "Featurs",
  components:{
    Button
  }
};
</script>

<style scoped>
.iconHolder {
  background: linear-gradient(to right bottom, #9753a0, #3554a6);
  color: white;
  border-radius: 10px;
  padding: 18px;
}
div p{
    opacity: .6;
}
h6 {
  color: #9753a0;
  margin: 10px 0;
}
</style>