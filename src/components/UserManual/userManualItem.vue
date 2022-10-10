<template>
  <div class="wraper">
    <div class="row">
      <router-link :to="{name:'introduction'}" class="col-lg-3 col-md-4 col-12">
        <div class="item">
          <span>1</span>
          <h6 style>المقدمة</h6>
          <p style="color: #555555">
            لقد حرصنا على تسهيل مهمتك ولذلك قمنا بتجهيز ما يسمى بخطة عملية إعداد
            الخمسة أيام لتساعدك في البدء
          </p>
        </div>
      </router-link>
      <div class="col-lg-3 col-md-4 col-12">
        <div class="item">
          <span>2</span>
          <h6 style>إعداد الخمس أيام</h6>
          <p style="color: #555555">
            لقد حرصنا على تسهيل مهمتك ولذلك قمنا بتجهيز ما يسمى بخطة عملية إعداد
            الخمسة أيام لتساعدك في البدء
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-12">
        <div class="item">
          <span>3</span>
          <h6 style>التطبيق</h6>
          <p style="color: #555555">
            نظم تخطيط موارد المؤسسات ERP تعمل على تحسين صحة مؤسستك على المدى
            الطويل عن طريق الحفاظ عليها فعالة
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-12">
        <div class="item">
          <span>4</span>
          <h6 style>الإعداد</h6>
          <p style="color: #555555">
            إن إعداد وتجهيز حسابك في نظام تخطيط موارد المؤسسات هو بمثابة بدء
            شركتك من الصفر
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-12">
        <div class="item">
          <span>5</span>
          <h6 style>البيع</h6>
          <p style="color: #555555">
            البيع هو إتصال يحدث مع العميل قبل وأثناء عملية البيع
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-12">
        <div class="item">
          <span>6</span>
          <h6 style>الشراء</h6>
          <p style="color: #555555">
            إذا كان عملك يشمل أصناف ملموسة، فإن الشراء هو واحد من أنشطة أعمالك
            الأساسية
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-12">
        <div class="item">
          <span>7</span>
          <h6 style>المخزون والجرد</h6>
          <p style="color: #555555">
            هنا نستعرض معلومات حول المخزون والجرد والبضائع الملموسة وكيفية
            التعامل معها
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-12">
        <div class="item">
          <span>8</span>
          <h6 style>المحاسبة</h6>
          <p style="color: #555555">
            في أبسط صورها، نحتاج إلى عمليات المحاسبة عند نهاية دورتي المبيعات
            والمشتريات
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-12">
        <div class="item">
          <span>9</span>
          <h6 style>إدارة الموارد البشرية</h6>
          <p style="color: #555555">
            دفتر الموارد البشرية HR هو ذلك الجزء من النظام الذي يغطي العمليات
            المرتبطة بإدارة فريق العمل
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-12">
        <div class="item">
          <span>10</span>
          <h6 style>التصنيع</h6>
          <p style="color: #555555">
            تطبيق التصنيع في آبتوس يساعدك على المحافظة على فاتورة مواد متعددة
            المستويات
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-12">
        <div class="item">
          <span>11</span>
          <h6 style>الدعم</h6>
          <p style="color: #555555">
            في أي عمل ناجح يجب أن يكون هناك خدمة عملاء وصيانة ممتازة
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-12">
        <div class="item">
          <span>12</span>
          <h6 style>إنشاء موقع الويب</h6>
          <p style="color: #555555">
            المواقع هي مكون أساسي لأي شركة ووجود موقع جيد
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-12">
        <div class="item">
          <span>13</span>
          <h6 style>أدوات التعاون</h6>
          <p style="color: #555555">
            مجموعة من الأدوات حيث يمكنك تعيين المعاملات وإدارة قائمة الأعمال
            المطلوبة والمشاركة
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-12">
        <div class="item">
          <span>14</span>
          <h6 style>مكتبة المعرفة</h6>
          <p style="color: #555555">
            تحتوي مكتبة المعرفة تعريفات وتفسيرات لمفاهيم الإدارة المختلفة
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userManualItem",
};
</script>

<style scoped>
.item {
  text-align: center;
  border: 1px solid #eeeeee;
  padding: 15px;
  border-radius: 15px;
  height: 100%;
}
.item,
.item * {
  transition: all 0.5s;
}
.col-12 {
  margin-bottom: 15px;
}
p {
  color: #555555;
}
h6 {
  color: #9753a0;
  margin-top: 15px;
}
span {
  padding: 10px 15px;
  border-radius: 50%;
  color: white;
  text-align: center;
  background: linear-gradient(to right, #9753a0, #3554a6);
}
.item:hover {
  background: linear-gradient(to right, #9753a0, #3554a6);
}
.item:hover * {
  color: white !important;
}
.item:hover span {
  background: white;
  color: #9753a0 !important;
}
</style>