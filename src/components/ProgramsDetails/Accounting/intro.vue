<template>
  <div class="wraper">
    <h6>
      <router-link
        style="display: inline-block; color: #9753a0"
        :to="{ name: 'home' }"
        >الرئيسية</router-link
      ><router-link
        style="display: inline-block; color: #9753a0"
        :to="{ name: 'programs' }"
        >/البرامج</router-link
      ><span>/المزايا</span>
    </h6>
    <div class="row">
      <div class="intro-text col-7">
        <h2 class="h2" style="color: #9753a0">برنامج محاسبة متكامل</h2>
        <p>
          برنامج محاسبي متكامل يساعدك على ادارة كافة حساباتك العامة وكل مايتعلق
          بعملياتك المحاسبية والمالية بغض النظر عن نوع ونشاط شركتك خدميا كان او
          تجاريا او حتى صناعيا ، بامكان محاسبك استخدام دفتر الحسابات لادارة كافة
          شؤونك المحاسبية من ادخل اول قيد وحتى استخراج ميزانية متكاملة .
        </p>
        <Button text=" جرب الآن"/>
      </div>
      <div class="col-5" style="margin-top: 50px">
        <img
          src="@/assets/images/accountingProgram/video-intro-img.png"
          style="width: 100% !important"
          alt="intro back"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/button.vue'
export default {
  name: "intro",
  components: {
    Button
  },
};
</script>

<style scoped>
.intro-text {
  margin-top: 15%;
}
</style>