<template>
  <div class="container-fluid">
    <header class="row justify-content-between">
      <div class="col-2 text-start mt-1" v-show="!applyMobileScreenMode">
        <router-link to="#"
          ><img
            src="../assets/images/Logo.png"
            style="width: 100px !important"
            alt=""
        /></router-link>
      </div>
      <div class="col-7 mt-1" v-show="!applyMobileScreenMode">
        <nav
          :class="[
            'row',
            'justify-content-center',
            { resize: applyMediumScreenStyles },
          ]"
        >
          <router-link
            :class="['col-auto', { 'clear-margin': applyMediumScreenStyles }]"
            :to="{ name: 'home' }"
            >الرئيسية</router-link
          >
          <router-link
            :class="[
              'col-auto',
              'mx-3',
              { 'clear-margin': applyMediumScreenStyles },
            ]"
            :to="{ name: 'about' }"
            >من نحن</router-link
          >
          <router-link
            :class="['col-auto', { 'clear-margin': applyMediumScreenStyles }]"
            :to="{ name: 'featurs' }"
            >المزايا</router-link
          >
          <router-link
            :class="[
              'col-auto',
              'mx-3',
              { 'clear-margin': applyMediumScreenStyles },
            ]"
            :to="{ name: 'bunch' }"
            >الباقات</router-link
          >
          <router-link
            :class="['col-auto', { 'clear-margin': applyMediumScreenStyles }]"
            :to="{ name: 'technicalSupport' }"
            >الدعم الفني</router-link
          >
        </nav>
      </div>
      <div :class="['col-3', 'd-flex', { resize: applyMediumScreenStyles }]">
        <Button text="جرب الآن" />
        <span>EN</span>
      </div>
      <div class="col-auto" v-show="applyMobileScreenMode">
        <i
          class="fa-solid fa-bars fa-2x"
          style="cursor: pointer"
          @click="toggleShowMobileLinks"
        ></i>
      </div>
    </header>
    <transition v-show="showMoblieLinks" name="mobile-links">
      <nav
        :class="[
          'mobileLinks',
          { mobileLinksAnimation: activeMobileLinksAnimation },
        ]"
      >
        <router-link class="link" :to="{ name: 'home' }"
          ><span>الرئيسية</span></router-link
        >
        <router-link class="link" :to="{ name: 'about' }"
          ><span>من نحن</span></router-link
        >
        <router-link class="link" :to="{ name: 'featurs' }"
          ><span>المزايا</span></router-link
        >
        <router-link class="link" :to="{ name: 'bunch' }"
          ><span>الباقات</span></router-link
        >
        <router-link class="link" :to="{ name: 'technicalSupport' }"
          ><span>الدعم الفني</span></router-link
        >
        <div v-show="showSideLinks">
          <div class="holderLink">
            <div class="link ">
              <router-link class="text-white" :to="{ name: 'userManual' }"
                >دليل المستخدم</router-link
              >
            </div>
          </div>
          <div class="holderLink">
            <div class="link">
              <router-link class="text-white" :to="{ name: 'introduction' }">مقدمة</router-link>
            </div>
          </div>
          <div class="holderLink">
            <div class="link d-flex justify-content-between">
              <h6>اعداد الخمس ايام</h6>
              <i @click="showOrHideMenue" class="fa fa-caret-left"></i>
            </div>
            <div class="dropMenue" style="display: none">
              <div>
                <span class="pointer" :to="{ name: 'userManual' }"
                  >جدول المواد</span 
                >
              </div>
              <div>
                <span class="pointer" :to="{ name: 'introduction' }"
                  >أداة التخطيط</span 
                >
              </div>
              <div>
                <span class="pointer" :to="{ name: 'userManual' }"
                  >جدول المواد</span 
                >
              </div>
              <div style="border-bottom: 1px solid #e4e4e4">
                <span class="pointer" :to="{ name: 'introduction' }"
                  >أداة التخطيط</span 
                >
              </div>
            </div>
          </div>
          <div class="holderLink">
            <div class="link d-flex justify-content-between">
              <h6>التطبيق</h6>
              <i @click="showOrHideMenue" class="fa fa-caret-left"></i>
            </div>
            <div class="dropMenue" style="display: none">
              <div>
                <span class="pointer" :to="{ name: 'userManual' }"
                  >جدول المواد</span 
                >
              </div>
              <div>
                <span class="pointer" :to="{ name: 'introduction' }"
                  >أداة التخطيط</span 
                >
              </div>
              <div>
                <span class="pointer" :to="{ name: 'userManual' }"
                  >جدول المواد</span 
                >
              </div>
              <div style="border-bottom: 1px solid #e4e4e4">
                <span class="pointer" :to="{ name: 'introduction' }"
                  >أداة التخطيط</span 
                >
              </div>
            </div>
          </div>
          <div class="holderLink">
            <div class="link d-flex justify-content-between">
              <h6>الاعداد</h6>
              <i @click="showOrHideMenue" class="fa fa-caret-left"></i>
            </div>
            <div class="dropMenue" style="display: none">
              <div>
                <span class="pointer" :to="{ name: 'userManual' }"
                  >جدول المواد</span 
                >
              </div>
              <div>
                <span class="pointer" :to="{ name: 'introduction' }"
                  >أداة التخطيط</span 
                >
              </div>
              <div>
                <span class="pointer" :to="{ name: 'userManual' }"
                  >جدول المواد</span 
                >
              </div>
              <div style="border-bottom: 1px solid #e4e4e4">
                <span class="pointer" :to="{ name: 'introduction' }"
                  >أداة التخطيط</span 
                >
              </div>
            </div>
          </div>
          <div class="holderLink">
            <div class="link d-flex justify-content-between">
              <h6>البيع</h6>
              <i @click="showOrHideMenue" class="fa fa-caret-left"></i>
            </div>
            <div class="dropMenue" style="display: none">
              <div>
                <span class="pointer" :to="{ name: 'userManual' }"
                  >جدول المواد</span 
                >
              </div>
              <div>
                <span class="pointer" :to="{ name: 'introduction' }"
                  >أداة التخطيط</span 
                >
              </div>
              <div>
                <span class="pointer" :to="{ name: 'userManual' }"
                  >جدول المواد</span 
                >
              </div>
              <div style="border-bottom: 1px solid #e4e4e4">
                <span class="pointer" :to="{ name: 'introduction' }"
                  >أداة التخطيط</span 
                >
              </div>
            </div>
          </div>

          <div class="holderLink">
            <div class="link d-flex justify-content-between">
              <h6>الشراء</h6>
              <i @click="showOrHideMenue" class="fa fa-caret-left"></i>
            </div>
            <div class="dropMenue" style="display: none">
              <div>
                <span class="pointer" :to="{ name: 'userManual' }"
                  >جدول المواد</span 
                >
              </div>
              <div>
                <span class="pointer" :to="{ name: 'introduction' }"
                  >أداة التخطيط</span 
                >
              </div>
              <div>
                <span class="pointer" :to="{ name: 'userManual' }"
                  >جدول المواد</span 
                >
              </div>
              <div style="border-bottom: 1px solid #e4e4e4">
                <span class="pointer" :to="{ name: 'introduction' }"
                  >أداة التخطيط</span 
                >
              </div>
            </div>
          </div>
          <div class="holderLink">
            <div class="link d-flex justify-content-between">
              <h6>المخزون والجرد</h6>
              <i @click="showOrHideMenue" class="fa fa-caret-left"></i>
            </div>
            <div class="dropMenue" style="display: none">
              <div>
                <span class="pointer" :to="{ name: 'userManual' }"
                  >جدول المواد</span 
                >
              </div>
              <div>
                <span class="pointer" :to="{ name: 'introduction' }"
                  >أداة التخطيط</span 
                >
              </div>
              <div>
                <span class="pointer" :to="{ name: 'userManual' }"
                  >جدول المواد</span 
                >
              </div>
              <div style="border-bottom: 1px solid #e4e4e4">
                <span class="pointer" :to="{ name: 'introduction' }"
                  >أداة التخطيط</span 
                >
              </div>
            </div>
          </div>

          <div class="holderLink">
            <div class="link d-flex justify-content-between">
              <h6>التصنيع</h6>
              <i @click="showOrHideMenue" class="fa fa-caret-left"></i>
            </div>
            <div class="dropMenue" style="display: none">
              <div>
                <span class="pointer" :to="{ name: 'userManual' }"
                  >جدول المواد</span 
                >
              </div>
              <div>
                <span class="pointer" :to="{ name: 'introduction' }"
                  >أداة التخطيط</span 
                >
              </div>
              <div>
                <span class="pointer" :to="{ name: 'userManual' }"
                  >جدول المواد</span 
                >
              </div>
              <div style="border-bottom: 1px solid #e4e4e4">
                <span class="pointer" :to="{ name: 'introduction' }"
                  >أداة التخطيط</span 
                >
              </div>
            </div>
          </div>
          <div class="holderLink">
            <div class="link d-flex justify-content-between">
              <h6>الدعم</h6>
              <i @click="showOrHideMenue" class="fa fa-caret-left"></i>
            </div>
            <div class="dropMenue" style="display: none">
              <div>
                <span class="pointer" :to="{ name: 'userManual' }"
                  >جدول المواد</span 
                >
              </div>
              <div>
                <span class="pointer" :to="{ name: 'introduction' }"
                  >أداة التخطيط</span 
                >
              </div>
              <div>
                <span class="pointer" :to="{ name: 'userManual' }"
                  >جدول المواد</span 
                >
              </div>
              <div style="border-bottom: 1px solid #e4e4e4">
                <span class="pointer" :to="{ name: 'introduction' }"
                  >أداة التخطيط</span 
                >
              </div>
            </div>
          </div>
          <div class="holderLink">
            <div class="link d-flex justify-content-between">
              <h6>إنشاء موقع ويب</h6>
              <i @click="showOrHideMenue" class="fa fa-caret-left"></i>
            </div>
            <div class="dropMenue" style="display: none">
              <div>
                <span class="pointer" :to="{ name: 'userManual' }"
                  >جدول المواد</span 
                >
              </div>
              <div>
                <span class="pointer" :to="{ name: 'introduction' }"
                  >أداة التخطيط</span 
                >
              </div>
              <div>
                <span class="pointer" :to="{ name: 'userManual' }"
                  >جدول المواد</span 
                >
              </div>
              <div style="border-bottom: 1px solid #e4e4e4">
                <span class="pointer" :to="{ name: 'introduction' }"
                  >أداة التخطيط</span 
                >
              </div>
            </div>
          </div>
          <div class="holderLink">
            <div class="link d-flex justify-content-between">
              <h6>أدوات التعاون</h6>
              <i @click="showOrHideMenue" class="fa fa-caret-left"></i>
            </div>
            <div class="dropMenue" style="display: none">
              <div>
                <span class="pointer" :to="{ name: 'userManual' }"
                  >جدول المواد</span 
                >
              </div>
              <div>
                <span class="pointer" :to="{ name: 'introduction' }"
                  >أداة التخطيط</span 
                >
              </div>
              <div>
                <span class="pointer" :to="{ name: 'userManual' }"
                  >جدول المواد</span 
                >
              </div>
              <div style="border-bottom: 1px solid #e4e4e4">
                <span class="pointer" :to="{ name: 'introduction' }"
                  >أداة التخطيط</span 
                >
              </div>
            </div>
          </div>
          <div class="holderLink">
            <div class="link d-flex justify-content-between">
              <h6>مكتبة المعرفة</h6>
              <i @click="showOrHideMenue" class="fa fa-caret-left"></i>
            </div>
            <div class="dropMenue" style="display: none">
              <div>
                <span class="pointer" :to="{ name: 'userManual' }"
                  >جدول المواد</span 
                >
              </div>
              <div>
                <span class="pointer" :to="{ name: 'introduction' }"
                  >أداة التخطيط</span 
                >
              </div>
              <div>
                <span class="pointer" :to="{ name: 'userManual' }"
                  >جدول المواد</span 
                >
              </div>
              <div style="border-bottom: 1px solid #e4e4e4">
                <span class="pointer" :to="{ name: 'introduction' }"
                  >أداة التخطيط</span 
                >
              </div>
            </div>
          </div>
        </div>
      </nav>
    </transition>
    <div class="header-back"></div>
  </div>
</template>

<script>
import Button from "./button.vue";
export default {
  name: "Header",
  data() {
    return {
      currentWindowWidth: null,
      applyMediumScreenStyles: false,
      applyMobileScreenMode: false,
      showMoblieLinks: false,
      activeMobileLinksAnimation: false,
    };
  },
  props:{
    showSideLinks:{
      type:Boolean,
      default:false,
    }
  }
  ,
  methods: {
    toggleShowMobileLinks() {
      if (!this.showMoblieLinks) {
        this.activeMobileLinksAnimation = true;
      } else {
        this.activeMobileLinksAnimation = false;
      }
      this.showMoblieLinks = !this.showMoblieLinks;
    },
    setScreenWidth() {
      this.currentWindowWidth = window.innerWidth;
      if (this.currentWindowWidth < 950 && this.currentWindowWidth > 800) {
        this.applyMediumScreenStyles = true;
        this.applyMobileScreenMode = false;
        this.showMoblieLinks = false;
        return;
      }
      if (this.currentWindowWidth < 800) {
        this.applyMobileScreenMode = true;
        this.applyMediumScreenStyles = false;
        return;
      }
      this.applyMobileScreenMode = false;
      this.applyMediumScreenStyles = false;
      this.showMoblieLinks = false;
      return;
    },
    showOrHideMenue(event) {
      let dropDownItem = event.target.parentElement.nextSibling;
      if (dropDownItem.style.display == "none") {
        dropDownItem.style.display = "block";
        event.target.parentElement.classList.add("showDrop");
        event.target.classList.add("fa-caret-down");
        event.target.classList.remove("fa-caret-left");
      } else {
        dropDownItem.style.display = "none";
        if (event.target.parentElement.classList.contains("showDrop"))
          event.target.parentElement.classList.remove("showDrop");
        event.target.classList.add("fa-caret-left");
        event.target.classList.remove("fa-caret-down");
      }
    },
  },
  created() {
    window.addEventListener("resize", this.setScreenWidth);
    this.setScreenWidth();
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
header {
  padding: 10px 30px;
  box-shadow: -1px -1px 8px #9753a0 inset;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 10;
  background: white;
}
.pointer{
  cursor: pointer;
}
.header-back {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  background-image: url("../assets/images/header-back.png");
  background-repeat: no-repeat;
  background-size: contain;
}
a {
  font-weight: 500;
}
a:hover {
  color: #6591ff;
}

.mobileLinks {
  background: linear-gradient(to bottom, black, #333);
  padding: 20px 0;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  overflow: auto;
  width: 200px;
  transition: all 1s;
  z-index: 10;
}
.mobileLinksAnimation {
  animation: mobileLinksEnter 1s;
}

.mobileLink {
  margin-bottom: 15px;
  color: white;
}
.resize {
  font-size: 14px !important;
}
.clear-margin {
  margin: 0 !important;
}
@keyframes mobileLinksEnter {
  0% {
    transform: translateX(250px);
  }
  100% {
    transform: translateX(0);
  }
}
.mobile-links-leave-to {
  transform: translateX(250px);
}

* {
  transition: all 0.2s;
}
.parent {
  position: relative;
}
.links {
  border-radius: 15px;
  /* overflow: auto; */
  /* width: 200px; */
  /* padding: 0; */
  /* height: 100%; */
  background: white;
}

i {
  cursor: pointer;
  margin-left: 10px;
}
.link {
  color: white;
  width: 100%;
  padding: 10px 0;
}

.link * {
  padding-right: 15px;
}
.dropMenue {
  padding: 5px 0;

  background: white;
}
.dropMenue * {
  padding-right: 20px;
}
.showDrop {
  background: #6591ff;
  color: white;
}
</style>>
