<template>
  <div class="wraper">
    <div class="row">
      <div class="col-5" style="margin-top: 5%">
        <img
          src="@/assets/images/home/who-are-we.png"
          style="width:100% !important; "
          alt="whoAreWe back"
        />
      </div>
      <div class="whoAreWe-text col-7">
        <h2 class="h2" style="color: #9753a0">آفاقك التجارية أقرب مما تتخيل</h2>
        <h6 style="color:#3554A6;">
          شركتك + تخطيط ورقابة مالية وإدارية شاملة + خفة وسرعة وانتشار = نمو
          مربح
        </h6>
        <p>
          تخطيط ومراقبة أداء منشأتك ماليا وإداريا أصبح أسهل مع حزمة تطبيقات
          دفاتر ERP السحابية. مهما تعددت شركاتك، بإمكانها التشارك في طاقم إداري
          واحد، و مهما كثرت وتوزعت معارضك التجارية بإمكانك ربطها بمكاتبك الخلفية
          ومهما كانت إجراءاتك الإدارية خاصة بك ولا تنطبق إلا عليك بإمكانك تصميم
          نماذجها و التحكم في تشغيلها ومراقبة سيرها. كله من منصة واحدة وحساب
          واحد وفاتورة تشغيلية واحدة بتكلفة معقولة جداً.
        </p>
        <Button text="APTUS لماذا" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../button.vue";
export default {
  name: "whoAreWe",
  components: {
    Button,
  },
};
</script>

<style scoped>

.whoAreWe-text {
  margin-top: 15%;
}
</style>