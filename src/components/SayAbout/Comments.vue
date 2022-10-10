<template>
  <div class="holder">
    <div class="wraper" style="padding: 30px 0">
      <div class="mt-5">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12">
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
          <div class="col-lg-4 col-md-6 col-12">
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
          <div class="col-lg-4 col-md-6 col-12">
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
          <div class="col-lg-4 col-md-6 col-12">
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
          <div class="col-lg-4 col-md-6 col-12">
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
          <div class="col-lg-4 col-md-6 col-12">
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
  </div>
</template>

<script>
export default {
  name: "Comments",
};
</script>

<style scoped>
.holder{
      background: #e6e6e6;
}
.comment {
  position: relative;
  margin-top: 10px;
  border-radius: 20px;
  box-shadow: -1px -1px 8px #eee inset;
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
</style>