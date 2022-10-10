<template>
  <div class="wraper">
    <div class="row">
      <div class="col-lg-4 col-12">
        <h2 style="color: #3554a6">ما هي</h2>
        <div class="my-3" >
          <img
            src="@/assets/images/Logo.png"
            style="width: 200px !important"
            alt=""
          />
        </div>
        <h4 style="color:#9753A0;">منصة الإدارة المتكاملة</h4>
        <p style="width:80%;">مرحباً بعصر خدمات تطبيقات الأعمال السحابية المتكاملة</p>
        <span style="color:#9753A0;">مرحبا أبتوس</span>
      </div>
      <div class="col-lg-8 col-12">
        <div class="row justify-content-start">
            <div class="whoItem col-md-5 col-12">
                <i class="fa fa-file-invoice" style=""></i>
                <h5 style="">مجموعة تطبيقات أعمال</h5>
                <small style="">مجموعة عريضة من تطبيقات الأعمال البرمجية المعدة للسوق المحلي</small>
            </div>
            <div class="whoItem col-md-5 col-12">
                <i class="fa fa-cloud" style=""></i>
                <h5 style="">تقنية سحابية</h5>
                <small style="">متوفرة على الانترنت 24×7 و لا تحتاج لتركيب برمجيات للدخول عليها والاستفادة منها</small>
            </div>
            <div class="whoItem col-md-5 col-12">
                <i class="fa fa-cloud" style=""></i>
                <h5 style="">مدارة بالكامل</h5>
                <small style="">من قبل فرق متخصصة في التطبيقات والاستضافة والشبكات وأمن المعلومات</small>
            </div>
            <div class="whoItem col-md-5 col-12">
                <i class="fa fa-file-invoice" style=""></i>
                <h5 style="">فاتورة دورية</h5>
                <small style="">تدفع مقابل خدمات الاستضافة الآمنة والتشغيل والدعم الفني والدعم المساند</small>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"whoIsShe",
};
</script>

<style scoped>
    .whoItem{
        background: rgb(250, 250, 250);
        border-radius: 15px;
        margin: 10px;
        padding: 15px 30px;
        cursor: pointer;
        transition: all .3s;
        color:#555555;
    }
    .whoItem small{
      opacity:.6;
    }
    .whoItem:hover{
      transform: scale(1.05);
      color:#9753A0;
    }
    .whoItem:hover small{
      opacity: 1;
    }
</style>