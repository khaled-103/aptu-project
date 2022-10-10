<template>
  <div class="wraper">
    <h6>
      <router-link
        style="display: inline-block; color: #9753a0"
        :to="{ name: 'home' }"
        >الرئيسية</router-link
      ><span>/دليل الاستخدام</span>
    </h6>
    <h4 class="text-center mt-5" style="color: #9753a0">دليل الاستخدام</h4>
    <p class="text-center" style="color: #555555;width:80%; margin:auto;">
      دليل المستخدم هو الخطوة الأولى في التعرف على خدمة دفاتر وكيفية التعامل
      معها. يمكنك التجول في صفحات الدليل من خلال النقر على أحد الأقسام في
      الأسفل.
    </p>
  </div>
</template>

<script>
export default {
  name: "intro",
};
</script>

<style>
</style>