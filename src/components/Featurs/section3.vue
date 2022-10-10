<template>
  <div class="holder">
    <div class="wraper">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-12 text-center">
            <div>
              <img src="@/assets/images/featurs/section3-img1.png" alt="" />
              <h6 class="my-3">كلمات سر المرة الواحدة (OTP)</h6>
              <p>
                إحصل على مستوى آمن للدخول على بياناتك يوازي الأنظمة والتطبيقات
                البنكية التي تقوم بإرسال كلمات سر نصية على رقم الجوال (الهاتف
                المتحرك) الخاص بالمستخدم في كل مرة يستخدم فيها موظفوك النظام،
                وهي خاصية بإمكانك فرضها على كل المستخدمين أو بعضهم بحسب ما
                تقتضيه مصلحة المنشأة.
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-12 text-center">
            <div>
              <img src="@/assets/images/featurs/section3-img2.png" alt="" />
              <h6 class="my-3">التشفير الكامل (SSL)</h6>
              <p>
                تتيح لك هذه الخاصية انتقال معلوماتك من مراكز بيانات دفاتر
                وأجهزتها الخادمة إلى متصفح الإنترنت الذي تستخدمه بشكل مشفر مما
                يصعب اختراق هذه البيانات عند انتقالها وحركتها خلال شبكة الانترنت
                وصولا إليك. تستخدم هذه التقنية عادة من قبل العديد من الأنظمة
                الحساسة كالأنظمة العسكرية أو البنكية.
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-12 text-center">
            <div>
              <img src="@/assets/images/featurs/section3-img3.png" alt="" />
              <h6 class="my-3">النسخ الاحتياطي الشخصي</h6>
              <p>
                نؤمن بأن بياناتك في دفاتر هل ملك لك، تستطيع نقلها وحفظها بأي
                طريقة تشاء، لذلك أتحنا لك خاصية بإمكانك من خلالها نسخ قواعد
                بياتك في دفاتر على خدمات التخزين السحابية الشهيرة مثل دروب بوكس
                وقوقل درايف وذلك بالفترة والتكرار الذي يناسبك، مرة كل ساعة أو كل
                أسبوع مثلا.
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-12 text-center">
            <div>
              <img src="@/assets/images/featurs/section3-img4.png" alt="" />
              <h6 class="my-3">النسخ الإحتياطي المتقدم</h6>
              <p>
                نقوم بعمليات النسخ الاحتياطي المتقدم على وحدات تخزين منفصلة
                لبيانات كل منشأة على حدة بشكل يمكننا من استرجاعها مشفرة في حال
                مسحت أو تم تغييرها بقصد أو بدون، وذلك كل 3 أيام مع إمكانية تقليل
                هذه الفترة بحسب ما تقتضيه ظروف المنشأة وحاجتها مقابل تكاليف
                رمزية إضافية.
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
  name: "section3",
};
</script>

<style scoped>
.holder {
  padding: 20px 0;
  background-image: url("@/assets/images/featurs/section3-back.png");
  background-repeat: no-repeat;
  background-size: auto;
}
img {
  max-width: 100%;
}
.col-12 {
  margin-bottom: 20px;
}
.col-12 div {
  height: 100%;
}
h6{
    color:#9753A0;
}
p{
    color:#555555;
    opacity: .6;
}
</style>