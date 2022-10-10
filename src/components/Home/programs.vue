<template>
  <div class="holder py-3">
    <h2 style="color: #9753a0" class="text-center mt-5 mb-3">برامج APTUS</h2>
    <h6 style="color: #3554a6" class="text-center">
      14 برنامجاً سحابياً مترابطاً في خدمة واحدة
    </h6>
    <prog />
    <router-link :to="{ name: 'programs' }">
      <Button class="text-center" text="المزيد" />
    </router-link>
  </div>
</template>

<script>
import Button from "@/components/button.vue";
import prog from "@/components/prog.vue";
export default {
  name: "programs",
  components: {
    Button,
    prog,
  },
};
</script>

<style scoped>
.holder {
  background: rgb(250, 250, 250);
}
</style>