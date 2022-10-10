<template>
  <div class="wraper">
    <form class="border p-5">
      <div class="row">
        <div class="star col-md-6 col-12">
          <input style="width: 100%" type="text" placeholder="الاسم الكريم" />
        </div>
        <div class="star col-md-6 col-12">
          <input style="width: 100%" type="text" placeholder="اسم المنشاة" />
        </div>
        <div class="star col-md-6 col-12">
          <input
            style="width: 100%"
            type="text"
            placeholder="البريد الالكتروني للعمل"
          />
        </div>
        <div class="star col-md-6 col-12">
          <input style="width: 100%" type="text" placeholder="رقم الهاتف" />
        </div>
        <div class="star col-md-6 col-12">
          <select name="" id="" style="width: 100%">
            <option value="" hidden>المنصب</option>
          </select>
        </div>
        <div class="star col-md-6 col-12">
          <select name="" id="" style="width: 100%">
            <option value="" hidden>نوع النشاط</option>
          </select>
        </div>
        <div class="star col-md-6 col-12">
          <select name="" id="" style="width: 100%">
            <option value="" hidden>عدد الموظفين</option>
          </select>
        </div>
        <div class="star col-md-6 col-12">
          <select name="" id="" style="width: 100%">
            <option value="" hidden>كيف سمعت عنا</option>
          </select>
        </div>
        <div class="star col-md-6 col-12">
          <select name="" id="" style="width: 100%">
            <option value="" hidden>هل لديك محاسب</option>
          </select>
        </div>
      </div>
      <div class="checkBoxes">
        <label>نوع احتياجك</label><br />
        <input type="checkbox" checked />محاسبة ومالية<br />
        <input type="checkbox" checked />إدارة علاقات العملاء<br />
        <input type="checkbox" />تجارة الكترونية<br />
        <input type="checkbox" checked />إدارة موارد الشركة لديك<br />
        <input type="checkbox" />الموارد البشرية/شؤون الموظفين<br />
        <input type="checkbox" />إدارة الطلبات<br />
        <input type="checkbox" />نقاط البيع<br />
        <input type="checkbox" />أتمتة الخدمات الإحترافية<br />
        <input type="checkbox" />ضريبة القيمة المضافة<br />
        <input type="checkbox" />إدارة المخزون والمستودعات<br />
        <input type="checkbox" />ربط الفروع<br />
        <input type="checkbox" />الفوترة وإدارة المبيعات<br />
        <input type="checkbox" />نقاط البيع وربطها بالنظام المالي<br />
      </div>
      <div class="text-center my-5">
        <button type="submit" style="padding: 5px 65px">ارسال</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "formRequest",
};
</script>

<style scoped>
form {
  border-radius: 20px;
  width: 84%;
  margin: auto;
}
input,
select {
  border-radius: 15px;
  border: none;
  padding: 5px 0;
  padding-right: 25px;
  background: rgb(241, 241, 241);
  margin-bottom: 10px;
  color: #555555;
}
button {
  border: none;
  padding: 2px 10px;
  border-radius: 25px;
  margin-left: 25px;
  min-width: 80px;
  background: linear-gradient(to right, #9753a0, #3554a6);
  color: white;
}
input[type="checkbox"] {
  margin-left: 15px;
}
.star {
  position: relative;
}

.star::before {
  content: "*";
  position: absolute;
  top: 10px;
  right: 25px;
  color: red;
}

@media screen and (max-width: 850px) {
  form {
    width:100%;
  }
}
</style>