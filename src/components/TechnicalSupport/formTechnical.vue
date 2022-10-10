<template>
  <div class="wraper">
    <form class="border p-5">
      <h4 class="text-center mb-5" style="color: #9753a0">طلب دعم فني</h4>
      <div class="row">
        <div class="col-md-6 col-12">
          <input style="width: 100%" type="text" placeholder="الاسم" />
        </div>
        <div class="col-md-6 col-12">
          <input
            style="width: 100%"
            type="text"
            placeholder="البريد الالكتروني"
          />
        </div>
        <div class="col-md-6 col-12">
          <input style="width: 100%" type="text" placeholder="رقم الهاتف" />
        </div>
        <div class="col-md-6 col-12">
          <select name="" id="" style="width: 100%">
            <option value="">نوع الاستفسار</option>
          </select>
        </div>
        <div class="col-12">
            <input
          style="width:100%;"
          type="text"
          placeholder="ادخل رابط الخدمة الخاص بك"
        />
        </div>
        
      </div>
      <div class="row">
        <span class="col-md-4 col-12">مشترك في آبتوس</span>
        <div class="col-md-3 col-12 row">
          <input type="radio" name="subscribe" checked />نعم
        </div>
        <div class="col-md-3 col-12 row">
          <input type="radio" name="subscribe" />لا
        </div>
      </div>
      <div class="d-flex mt-3" style="padding-left: ">
        <span class="mt-2">إرفاق ملف أو صورة مساندة</span>
        <div class="">
          <input type="file" />
        </div>
      </div>
      <textarea
        class="form-control my-3"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="الاستفسار"
      ></textarea>
      <div class="text-center">
      <button type="submit" style="padding:5px 65px;">ارسال</button>

      </div>
    </form>
  </div>
</template>

<script>
export default {
    name:'formTichnical'
};
</script>

<style scoped>
form{
    border-radius: 20px;
}
input,
textarea,
select {
  border-radius: 15px;
  border: none;
  padding: 5px;
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

input[type="radio"]:checked {
  appearance: none;
  -webkit-appearance: none;
  border-radius: 50%;
  background: #9753a0;
  border: 1px solid #d3d3d3;
  outline: 1px solid #999;
  outline-offset: 2px;
}
input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  border-radius: 50%;
  background: white;
  width: 15px;
  height: 15px;
  border: 1px solid #d3d3d3;
  margin-left: 20px;
  margin-top: 5px;
}

input[type="file"] {
  background: white;
}
</style>