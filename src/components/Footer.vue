<template>
  <footer style="">
    <div class="foot">
      <div class="footer-content">
        <div><img src="@/assets/images/Logo.png" width="150px" alt="" /></div>
        <ul class="my-4 row">
          <router-link :to="{ name: 'userManual' }" class="col-md-3 col-6"
            >دليل المستخدم</router-link
          >
          <router-link :to="{ name: 'privacyPolicy' }" class="col-md-3 col-6"
            >سياسة الخصوصية</router-link
          >

          <router-link :to="{name:'faq'}" class="col-md-3 col-6">الأسئلة الشائعة</router-link>
        </ul>
        <div class="row justify-content-between">
          <div class="viza col-auto mb-2">
            <img src="@/assets/images/visa-back.png" alt="" />
          </div>
          <div class="social col-auto">
            <i class="fa-brands fa-youtube fa-2x"></i>
            <i class="fa-brands fa-facebook fa-2x"></i>
            <i class="fa-brands fa-youtube fa-2x"></i>
            <i class="fa-brands fa-facebook fa-2x"></i>
            <i class="fa-brands fa-youtube fa-2x"></i>
          </div>
        </div>
      </div>
      <div
        style="
          background: linear-gradient(to right, #9753a0, #3554a6);
          padding: 10px 0;
          text-align: center;
          border-radius: 30px 30px 0 0;
        "
      >
        <h6>جميع الحقوق محفوظة 2022</h6>
      </div>
      <div class="footer-grid">
        <img src="@/assets/images/footer-grid.png" width="100%" alt="" />
      </div>
      <div class="footer-back">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,32L80,69.3C160,107,320,181,480,202.7C640,224,800,192,960,192C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.foot {
  position: relative;
}
.footer-content {
  width: 80%;
  margin: 250px auto 10px auto;
}
.footer-grid {
  position: absolute;
  top: -170px;
  right: 0;
  width: 100px;
  /* height: 200px; */
}
.footer-back {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
}

i {
  color: #9753a0;
  padding: 5px;
  margin-left: 4px;
}
</style>