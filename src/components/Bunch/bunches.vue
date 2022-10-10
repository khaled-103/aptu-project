<template>
  <div class="wraper">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-12">
        <div
          :class="[
            'text-center',
            'bunch-item',
            { margintop65: !styleSmallScreen },
          ]"
        >
          <h4>ابتوس بيسك</h4>
          <h6>
            <span> مجانا </span>
          </h6>
          <p>عدد لا محدود من المنتجات</p>
          <p>عدد لا محدود من الطلبات</p>
          <p>عدد لا محدود من العملاء</p>
          <p>عدد لا محدود من كوبونات التخفيض</p>
          <button>اختر الباقة</button>
        </div>
      </div>
      <div :class="['col-lg-4', 'col-md-6', 'col-12']">
        <div
          :class="[
            'text-center',
            'bunch-item',
            'default',
            { padding100: !styleSmallScreen },
          ]"
        >
          <h4>ابتوس بيسك</h4>
          <h6>
            <span> 150$ / y </span>
          </h6>
          <p>جميع مميزات آبتوس بيسك</p>
          <p>أدوات تسويقية</p>
          <p>دعم جميع أنواع المنتجات</p>
          <p>تقارير متقدمة</p>
          <p>التحكم بتصميم المتجر</p>
          <button>اختر الباقة</button>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-12">
        <div
          :class="[
            'text-center',
            'bunch-item',
            { margintop65: !styleSmallScreen },
          ]"
        >
          <h4>آبتوس برو</h4>
          <h6>
            <span> 300$ / y </span>
          </h6>
          <p>جميع مميزات آبتوس برو</p>
          <p>إضافة فريق عمل</p>
          <p>تعيين صلاحيات محددة للمستخدمين</p>
          <p>الربط مع الخدمات الاعلانية</p>
          <p>دعم ضريبة القيمة المضافة</p>
          <button>اختر الباقة</button>
        </div>
      </div>
    </div>
    <div class="text-center" style="margin-top: 150px">
      <button
        style="padding: 5px 70px"
        @click="showCompareTable = !showCompareTable"
      >
        مقارنة الباقات
      </button>

      <table class="table table-bordered mt-5" v-show="showCompareTable">
        <thead style="color: white">
          <tr style="background: #3554a6; border-radius: 10px">
            <th scope="col" style="padding-bottom: 20px">الباقات الشهرية</th>
            <th scope="col">
              آبتوس بيسك<br />
              <span>الباقة الأساسية</span>
            </th>
            <th scope="col">
              آبتوس بلس<br />
              <span>الباقة المتقدمة</span>
            </th>
            <th scope="col">
              آبتوس برو<br />
              <span>الباقة الإحترافية</span>
            </th>
          </tr>
          <tr style="background: #9753a0" class="mb-5">
            <th scope="col">الاشتراك الشهري</th>
            <th scope="col">مجانا</th>
            <th scope="col">150 $ / Y</th>
            <th scope="col">300 $ / Y</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th
              scope="row"
              class="text-center text-white"
              colspan="4"
              style="
                border-right-style: none;
                border-radius: 10px;
                background: #777;
              "
            >
              المميزات الأساسية
            </th>
          </tr>
          <tr>
            <td scope="row">رابط خاص (دومين)</td>
            <td><i class="fa fa-times" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">الدفع الإلكتروني</td>
            <td><i class="fa fa-times" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">الربط مع شركات الشحن</td>
            <td><i class="fa fa-times" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">دعم العملات</td>
            <td><i class="fa fa-times" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">تطبيق المتجر Andrid & iOS</td>
            <td><i class="fa fa-times" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">دعم اللغات</td>
            <td><i class="fa fa-check" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">طلبات لا محدودة</td>
            <td><i class="fa fa-check" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
                    <tr>
            <th
              scope="row"
              class="text-center text-white"
              colspan="4"
              style="
                border-right-style: none;
                border-radius: 10px;
                background: #777;
              "
            >
              المميزات الأساسية
            </th>
          </tr>
          <tr>
            <td scope="row">رابط خاص (دومين)</td>
            <td><i class="fa fa-times" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">الدفع الإلكتروني</td>
            <td><i class="fa fa-times" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">الربط مع شركات الشحن</td>
            <td><i class="fa fa-times" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">دعم العملات</td>
            <td><i class="fa fa-times" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">تطبيق المتجر Andrid & iOS</td>
            <td><i class="fa fa-times" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">دعم اللغات</td>
            <td><i class="fa fa-check" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">طلبات لا محدودة</td>
            <td><i class="fa fa-check" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
                    <tr>
            <th
              scope="row"
              class="text-center text-white"
              colspan="4"
              style="
                border-right-style: none;
                border-radius: 10px;
                background: #777;
              "
            >
              المميزات الأساسية
            </th>
          </tr>
          <tr>
            <td scope="row">رابط خاص (دومين)</td>
            <td><i class="fa fa-times" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">الدفع الإلكتروني</td>
            <td><i class="fa fa-times" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">الربط مع شركات الشحن</td>
            <td><i class="fa fa-times" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">دعم العملات</td>
            <td><i class="fa fa-times" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">تطبيق المتجر Andrid & iOS</td>
            <td><i class="fa fa-times" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">دعم اللغات</td>
            <td><i class="fa fa-check" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">طلبات لا محدودة</td>
            <td><i class="fa fa-check" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
                    <tr>
            <th
              scope="row"
              class="text-center text-white"
              colspan="4"
              style="
                border-right-style: none;
                border-radius: 10px;
                background: #777;
              "
            >
              المميزات الأساسية
            </th>
          </tr>
          <tr>
            <td scope="row">رابط خاص (دومين)</td>
            <td><i class="fa fa-times" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">الدفع الإلكتروني</td>
            <td><i class="fa fa-times" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">الربط مع شركات الشحن</td>
            <td><i class="fa fa-times" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">دعم العملات</td>
            <td><i class="fa fa-times" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">تطبيق المتجر Andrid & iOS</td>
            <td><i class="fa fa-times" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">دعم اللغات</td>
            <td><i class="fa fa-check" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td scope="row">طلبات لا محدودة</td>
            <td><i class="fa fa-check" aria-hidden="true"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "bunches",
  data() {
    return {
      styleSmallScreen: false,
      currentScreenWidth: null,
      showCompareTable: false,
    };
  },
  methods: {
    setScreenWidth() {
      this.currentScreenWidth = window.innerWidth;
      if (this.currentScreenWidth < 1000) this.styleSmallScreen = true;
      else this.styleSmallScreen = false;
    },
  },
  created() {
    window.addEventListener("resize", this.setScreenWidth);
    this.setScreenWidth();
  },
};
</script>

<style scoped>
th {
  font-size: 11.5px;
}
td:first-child{
  font-size: 13.5px;
}

tbody:before {
  content: "@";
  display: block;
  line-height: 10px;
  text-indent: -77799px;
}

td:last-child,
th:last-child {
  border-radius: 10px 0 0 10px;
}
tbody,
tr {
  border-style: none;
}
td,
th:last-child {
  border-left-width: 0;
}

td:first-child,
th:first-child {
  border-radius: 0 10px 10px 0;
}
th:first-child,
td:first-child {
  border-right-style: none;
  text-align: right;
  padding-right: 14px;
}
tr {
  border-color: #c2c2c2;
}
tr:nth-child(even) {
  background: #f7f7f7;
}
tr:nth-child(odd) {
  background: #e0e0e0;
}

.col-12 {
  margin-bottom: 15px;
}
h4 {
  color: #9753a0;
}
h6 span {
  display: inline-block;
  color: #3554a6;
  padding: 5px 40px;
  background: white;
  border-radius: 20px;
  margin-bottom: 10px;
}
.bunch-item {
  background: rgb(247, 247, 247);
  border-radius: 15px;
  padding: 20px 0;
  height: 100%;
}
.bunch-item.default {
  background: #3554a6;
  color: white;
}
.padding100 {
  padding: 100px 0;
}
.margintop65 {
  margin-top: 65px;
}
.bunch-item.default h4 {
  color: white;
}
button {
  border: none;
  padding: 2px 20px;
  border-radius: 25px;
  margin-left: 25px;
  min-width: 80px;
  background: linear-gradient(to right, #9753a0, #3554a6);
  color: white;
}
.bunch-item.default button {
  background: white;
  color: #9753a0;
}
.fa-check{
  background-color: #00B731;
  border-radius: 50%;
  padding: 4px;
  color:white;
}
.fa-times{
  background-color: #B70000;
  border-radius: 50%;
  padding: 4px 8px;
  color:white;
}
</style>