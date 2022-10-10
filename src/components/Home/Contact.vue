<template>
  <div class="wraper">
    <div class="row">
      <div class="form col-lg-6 col-12">
        <h2 style="color: #9753a0">تواصل معنا</h2>
        <p style="color: #555555">
          يمكنك مراسلتنا في أي وقت تريد من نموذج التواصل أدناه أو الاتصال بنا
          على الرقم الموحد 920034002
        </p>
        <form>
          <div class="d-flex">
            <input class="" type="text" placeholder="الاسم" />
            <input
              style="margin-right: 10px"
              type="text"
              placeholder="البريد الالكتروني"
            />
          </div>
          <textarea
            class="form-control my-3"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="التفاصيل"
          ></textarea>
          <button type="submit">ارسال</button>
        </form>
      </div>
      <div class="image col-lg-6 col-12">
        <img src="@/assets/images/home/contact-us.png" width="100%" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
input,
textarea {
  border-radius: 15px;
  border: none;
  padding: 5px;
  background: rgb(241, 241, 241);
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
</style>