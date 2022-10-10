<template>
  <div class="wraper">
    <h4 class="mb-5 text-center" style="color:#9753A0;">كيف تعمل وصلة أبتوس</h4>
    <div class="row ">
        <div class="col-lg-6 col-12 ">
            <div class="d-flex">
                <img src="@/assets/images/advancedAnalytics/howWork-img1.png" style="width:100px !important;height:100px !important;margin-left:10px;" alt="">
                <div >
                    <h6>أولاً: تحميل ملحق دفاتر بور بي آي</h6>
                    <h6 class="my-1"> Dafater Power BI Extension</h6>
                    <Button text="تنزيل"/>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-12 ">
            <div class="d-flex">
                <img src="@/assets/images/advancedAnalytics/howWork-img2.png" style="width:100px !important;height:100px !important;margin-left:10px;" alt="">
                <div >
                    <h6>ثانياً: ركب الملحق باتباع التعليمات</h6>
                    <h6 class="my-1">في الملف المرفق</h6>
                    <Button text="تنزيل"/>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/button.vue'
export default {
    name:"howWork",
    components:{
        Button
    }
}
</script>

<style scoped>
h6{
    color:#3554A6;
}
.col-12{
    margin-bottom: 18px;
}
</style>