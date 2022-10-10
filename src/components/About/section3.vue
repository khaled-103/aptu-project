<template>
  <div class="holder py-3">
    <div class="wraper">
      <div class="row">
        <!-- <div > -->
          <img class="col-md-6 col-12" src="@/assets/images/about/section3-img.png" alt="" />
        <!-- </div> -->
        <div class="col-md-6 col-12 my-3">
          <p>
            نظام إحترافي بمعنى الكلمة، جميع برامج آبتوس مترابطة ومتوافقة مع
            بعضها البعض لتغطي جميع جوانب العمل الاداري والتجاري، هناك إعدادات
            وخيارات دقيقة جداً يحتويها آبتوس أضف لذلك فهو محدّث بشكل متواصل، لا
            غنى عن آبتوس في أي مؤسسة تجارية، أدر وقتك وموظفيك وأعمالك ببساطة
            وسهولة
          </p>
          <Button text="جرب الأن" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/button.vue";
export default {
  name: "section3",
  components: {
    Button,
  },
};
</script>

<style scoped>
.holder{
    background: rgb(247, 247, 247);
}
</style>