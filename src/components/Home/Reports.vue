<template>
  <div class="holder text-white">
    <div class="wraper">
      <h2 class="text-center">تقارير القمة بين يديك</h2>
      <p class="text-center mb-5">
        تقارير تحليلية قياسية ومتقدمة تلخص لك مشهد العمليات المتشعبة لإداراتك
        المختلفة
      </p>
      <div class="row justify-content-center">
        <div class="col-md-5 col-12">
          <div class="card">
            <img
              class="card-img-top"
              src="@/assets/images/home/report1.png"
              alt="Card image"
            />
            <div class="card-body" style="background: transparent !important">
              <h5 class="card-title">تحليلات متقدمة</h5>
              <p class="card-text">
                تقارير تحليلية قياسية ومتقدمة تلخص لك مشهد العمليات المتشعبة
                لإداراتك المختلفة
              </p>
              <router-link :to="{name:'advancedAnalytics'}">
                <span href="#" class="btn btn-primary" style="color: #00f6ff"
                  >المزيد...</span
                >
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-5 col-12">
          <div class="card">
            <img
              class="card-img-top"
              src="@/assets/images/home/report2.png"
              alt="Card image"
            />
            <div class="card-body">
              <h5 class="card-title">تحليلات قياسية</h5>
              <p class="card-text">
                تقارير تحليلية قياسية ومتقدمة تلخص لك مشهد العمليات المتشعبة
                لإداراتك المختلفة
              </p>
              <span href="#" class="btn btn-primary" style="color: #00f6ff"
                >المزيد...</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="paginate row justify-content-center">
        <i class="fa-solid fa-arrow-right col-auto"></i>
        <div class="col-auto mx-5">
          <span class="paginate-circle"></span>
          <span class="paginate-circle mx-2"></span>
          <span class="paginate-circle"></span>
          <span class="paginate-circle mx-2"></span>
        </div>
        <i class="fa-solid fa-arrow-left col-auto"></i>
      </div>
    </div>
    <div class="reports-back"></div>
  </div>
</template>

<script>
export default {
  name: "Reports",
};
</script>

<style scoped>
.holder {
  background: linear-gradient(to right, #9753a0, #3554a6);
  position: relative;
  margin-bottom: 100px;
  padding: 20px 0;
}
.reports-back {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-position: bottom;
  background-image: url("@/assets/images/home/reports-back.png");
  background-repeat: no-repeat;
  background-size: contain;
}
.card {
  z-index: 3;
  background: transparent;
  border: none;
  margin-bottom: 25px;
}
.paginate-circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
  display: inline-block;
}
.paginate-circle:last-child {
  width: 30px;
  border-radius: 50px;
  background: #00f6ff;
}
</style>