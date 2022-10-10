<template>
  <div class="holder">
    <div class="wraper" style="padding: 30px 0">
      <h2 class="h2 text-center" style="color: #9753a0">قالو عنا..</h2>
      <div class="mt-5">
        <div class="row">
          <div class="col-md-4 col-12">
            <div class="d-flex justify-content-start">
              <img
                class="pt-3"
                style=""
                src="@/assets/images/home/about1.png"
                alt=""
              />
              <div class="pt-5">
                <h6>م.احمد محمد</h6>
                <h6>محاسب، CARWASH</h6>
              </div>
            </div>
            <div class="bg-white p-4 comment" style="">
              <p>
                السلام عليكم ورحمة الله وبركاته برنامج مميز وفريق اكثر تميز
                عبدالله سليمان السعيد من مغسلة الآلة المتخصصة للسيارات EMCW
              </p>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div class="d-flex justify-content-start">
              <img
                class="pt-3"
                style=""
                src="@/assets/images/home/about2.png"
                alt=""
              />
              <div class="pt-5">
                <h6>هشام الكناني</h6>
                <h6>محاسب، CARWASH</h6>
              </div>
            </div>
            <div class="bg-white p-4 comment" style="">
              <p>
                خدمة مميزه تتيح لك ادارة موسستك بطريقة السليمة والصحيحة ومتابعة
                حسابتك في مكان واي زمان وهذا من اهم الميزات
              </p>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div class="d-flex justify-content-start">
              <img
                class="pt-3"
                style=""
                src="@/assets/images/home/about3.png"
                alt=""
              />
              <div class="pt-5">
                <h6>محمد احمد مصطفى</h6>
                <h6>محاسب، CARWASH</h6>
              </div>
            </div>
            <div class="bg-white p-4 comment" style="">
              <p>
                خدمة رائعة ساعدتني علي ادارة عملي بسهولة وربط الفروع المختلفة
                ومتابعتها من اي مكان. خدمة الدعم الفني مميزة جدا
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-back about-back1">
      <img src="@/assets/images/home/about-back1.png" alt="" />
    </div>
    <div class="about-back about-back2">
      <img src="@/assets/images/home/about-back2.png" alt="" />
    </div>
    <div class="about-back about-back3">
      <img src="@/assets/images/home/about-back3.png" alt="" />
    </div>

    <div class="youtub wraper">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12 mb-4">
          <div>
            <div style="position: relative">
              <img
                src="@/assets/images/home/youtube1.png"
                width="100%"
                alt=""
              />
              <i class="fa-brands fa-youtube fa-3x youtubeIcon"></i>
            </div>
            <h6 style="color: #3554a6; margin: 15px 0 2px 0">
              شركة المحتوى المتكامل
            </h6>
            <small>سائد الشريف – محاسب</small>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mb-4">
          <div>
            <div style="position: relative">
              <img
                src="@/assets/images/home/youtube2.png"
                width="100%"
                alt=""
              />
              <i class="fa-brands fa-youtube fa-3x youtubeIcon"></i>
            </div>
            <h6 style="color: #3554a6; margin: 15px 0 2px 0">
              شركة ربط الشبكات
            </h6>
            <small>أحمد الصادق – المدير المالي</small>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mb-4">
          <div>
            <div style="position: relative">
              <img
                src="@/assets/images/home/youtube3.png"
                width="100%"
                alt=""
              />
              <i class="fa-brands fa-youtube fa-3x youtubeIcon"></i>
            </div>
            <h6 style="color: #3554a6; margin: 15px 0 2px 0">
              شركة خبرة السداد
            </h6>
            <small>فيصل الأسمري – الرئيس التنفيذي</small>
          </div>
        </div>
      </div>
    </div>
    <router-link :to="{ name: 'sayAbout' }">
      <Button text="المزيد" class="text-center" />
    </router-link>
  </div>
</template>

<script>
import Button from "@/components/button.vue";
export default {
  name: "about",
  components: {
    Button,
  },
};
</script>

<style scoped>
.holder {
  background: rgb(248, 248, 248);
  position: relative;
}

.about-back {
  position: absolute;
}
.about-back1 {
  top: 23%;
  left: 14%;
}
.about-back2 {
  top: 5%;
  right: 36%;
}
.about-back3 {
  top: -150px;
  right: 0;
}
.comment {
  position: relative;
  margin-top: 10px;
  border-radius: 20px;
}
.comment p {
  min-height: 120px;
}
.comment::after {
  content: "";
  position: absolute;
  top: -20px;
  right: 50px;
  width: 0;
  height: 0;
  z-index: 40;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid white;
}
.youtubeIcon {
  position: absolute;
  top: 50%;
  color: white;
  left: 50%;
  transform: translate(-50%, -50%);
}
small {
  /* font-size: 15px; */
  color: #555555;
  opacity: 0.8;
}
</style>