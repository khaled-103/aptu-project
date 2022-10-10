<template>
  <div class="holder">
    <div class="wraper text-center">
      <div style="width: 60%; margin: auto" class="py-5 text-white">
        <h4>العديد من الميزات والخصائص الرائعة في مكان واحد</h4>
        <p>
          آبتوس منصة إدارية ومالية شاملة صممت للمنشأة العصرية وروعي فيها العديد
          من المزايا الهامة التي تسهل عملها
        </p>
      </div>
    </div>
    <div class="back"></div>
  </div>
</template>

<script>
export default {
  name: "section4",
};
</script>

<style scoped>
.holder {
  background: linear-gradient(to right, #9753a0, #3554a6);
  position: relative;
}
.back {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-image: url("@/assets/images/about/section5-back.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
}
</style>