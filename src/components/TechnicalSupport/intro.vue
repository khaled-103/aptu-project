<template>
  <div class="wraper">
    <h6>
      <router-link
        style="display: inline-block; color: #9753a0"
        :to="{ name: 'home' }"
        >الرئيسية</router-link
      ><span>/الدعم الفني</span>
    </h6>
    <div class="row">
      <div class="intro-text col-7">
        <h2 class="h2" style="color: #9753a0">الدعم الفني</h2>
        <p>
          تنقترح الإطلاع على
          <router-link
            style="display: inline; color: #3554a6"
            :to="{ name: 'userManual' }"
            >دليل المستخدم</router-link
          >
          و
          <router-link
            style="display: inline; color: #3554a6"
            :to="{ name: 'privacyPolicy' }"
            >الأسئلة الشائعة</router-link
          >
          حيث أنهما يحتويان على الكثير من المعلومات حول تجهيز الخدمة وطريقة
          إنجاز العديد من المهام. وإذا لم تجد مبتغاك فيمكنك الاتصال على الرقم
          123456789 كما يمكن مراسلتنا وفتح تذكرة دعم عبر تعبئة النموذج التالي
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