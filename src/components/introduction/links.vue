<template>
  <div class="border links col-2">
    <div class="holderLink">
      <div class="link">
        <router-link :to="{ name: 'userManual' }">دليل المستخدم</router-link>
      </div>
    </div>
    <div class="holderLink">
      <div class="link">
        <router-link :to="{ name: 'introduction' }">مقدمة</router-link>
      </div>
    </div>
    <div class="holderLink">
      <div class="link d-flex justify-content-between">
        <h6>اعداد الخمس ايام</h6>
        <i
          @click="showOrHide"
          class="fa fa-caret-left"
          
        ></i>
      </div>
      <div class="dropMenue" style="display: none">
        <div>
          <router-link :to="{ name: 'userManual' }">جدول المواد</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'introduction' }">أداة التخطيط</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'userManual' }">جدول المواد</router-link>
        </div>
        <div style="border-bottom: 1px solid #e4e4e4">
          <router-link :to="{ name: 'introduction' }">أداة التخطيط</router-link>
        </div>
      </div>
    </div>
    <div class="holderLink">
      <div class="link d-flex justify-content-between">
        <h6>التطبيق</h6>
        <i
          @click="showOrHide"
          class="fa fa-caret-left"
          
        ></i>
      </div>
      <div class="dropMenue" style="display: none">
        <div>
          <router-link :to="{ name: 'userManual' }">جدول المواد</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'introduction' }">أداة التخطيط</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'userManual' }">جدول المواد</router-link>
        </div>
        <div style="border-bottom: 1px solid #e4e4e4">
          <router-link :to="{ name: 'introduction' }">أداة التخطيط</router-link>
        </div>
      </div>
    </div>
    <div class="holderLink">
      <div class="link d-flex justify-content-between">
        <h6>الاعداد</h6>
        <i
          @click="showOrHide"
          class="fa fa-caret-left"
          
        ></i>
      </div>
      <div class="dropMenue" style="display: none">
        <div>
          <router-link :to="{ name: 'userManual' }">جدول المواد</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'introduction' }">أداة التخطيط</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'userManual' }">جدول المواد</router-link>
        </div>
        <div style="border-bottom: 1px solid #e4e4e4">
          <router-link :to="{ name: 'introduction' }">أداة التخطيط</router-link>
        </div>
      </div>
    </div>
    <div class="holderLink">
      <div class="link d-flex justify-content-between">
        <h6>البيع</h6>
        <i
          @click="showOrHide"
          class="fa fa-caret-left"
          
        ></i>
      </div>
      <div class="dropMenue" style="display: none">
        <div>
          <router-link :to="{ name: 'userManual' }">جدول المواد</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'introduction' }">أداة التخطيط</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'userManual' }">جدول المواد</router-link>
        </div>
        <div style="border-bottom: 1px solid #e4e4e4">
          <router-link :to="{ name: 'introduction' }">أداة التخطيط</router-link>
        </div>
      </div>
    </div>

    <div class="holderLink">
      <div class="link d-flex justify-content-between">
        <h6>الشراء</h6>
        <i
          @click="showOrHide"
          class="fa fa-caret-left"
          
        ></i>
      </div>
      <div class="dropMenue" style="display: none">
        <div>
          <router-link :to="{ name: 'userManual' }">جدول المواد</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'introduction' }">أداة التخطيط</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'userManual' }">جدول المواد</router-link>
        </div>
        <div style="border-bottom: 1px solid #e4e4e4">
          <router-link :to="{ name: 'introduction' }">أداة التخطيط</router-link>
        </div>
      </div>
    </div>
    <div class="holderLink">
      <div class="link d-flex justify-content-between">
        <h6>المخزون والجرد</h6>
        <i
          @click="showOrHide"
          class="fa fa-caret-left"
          
        ></i>
      </div>
      <div class="dropMenue" style="display: none">
        <div>
          <router-link :to="{ name: 'userManual' }">جدول المواد</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'introduction' }">أداة التخطيط</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'userManual' }">جدول المواد</router-link>
        </div>
        <div style="border-bottom: 1px solid #e4e4e4">
          <router-link :to="{ name: 'introduction' }">أداة التخطيط</router-link>
        </div>
      </div>
    </div>
    
    
    <div class="holderLink">
      <div class="link d-flex justify-content-between">
        <h6>التصنيع</h6>
        <i
          @click="showOrHide"
          class="fa fa-caret-left"
          
        ></i>
      </div>
      <div class="dropMenue" style="display: none">
        <div>
          <router-link :to="{ name: 'userManual' }">جدول المواد</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'introduction' }">أداة التخطيط</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'userManual' }">جدول المواد</router-link>
        </div>
        <div style="border-bottom: 1px solid #e4e4e4">
          <router-link :to="{ name: 'introduction' }">أداة التخطيط</router-link>
        </div>
      </div>
    </div>
    <div class="holderLink">
      <div class="link d-flex justify-content-between">
        <h6>الدعم</h6>
        <i
          @click="showOrHide"
          class="fa fa-caret-left"
          
        ></i>
      </div>
      <div class="dropMenue" style="display: none">
        <div>
          <router-link :to="{ name: 'userManual' }">جدول المواد</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'introduction' }">أداة التخطيط</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'userManual' }">جدول المواد</router-link>
        </div>
        <div style="border-bottom: 1px solid #e4e4e4">
          <router-link :to="{ name: 'introduction' }">أداة التخطيط</router-link>
        </div>
      </div>
    </div>
    <div class="holderLink">
      <div class="link d-flex justify-content-between">
        <h6>إنشاء موقع ويب</h6>
        <i
          @click="showOrHide"
          class="fa fa-caret-left"
          
        ></i>
      </div>
      <div class="dropMenue" style="display: none">
        <div>
          <router-link :to="{ name: 'userManual' }">جدول المواد</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'introduction' }">أداة التخطيط</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'userManual' }">جدول المواد</router-link>
        </div>
        <div style="border-bottom: 1px solid #e4e4e4">
          <router-link :to="{ name: 'introduction' }">أداة التخطيط</router-link>
        </div>
      </div>
    </div>
    <div class="holderLink">
      <div class="link d-flex justify-content-between">
        <h6>أدوات التعاون</h6>
        <i
          @click="showOrHide"
          class="fa fa-caret-left"
          
        ></i>
      </div>
      <div class="dropMenue" style="display: none">
        <div>
          <router-link :to="{ name: 'userManual' }">جدول المواد</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'introduction' }">أداة التخطيط</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'userManual' }">جدول المواد</router-link>
        </div>
        <div style="border-bottom: 1px solid #e4e4e4">
          <router-link :to="{ name: 'introduction' }">أداة التخطيط</router-link>
        </div>
      </div>
    </div>
    <div class="holderLink">
      <div class="link d-flex justify-content-between">
        <h6>مكتبة المعرفة</h6>
        <i
          @click="showOrHide"
          class="fa fa-caret-left"
          
        ></i>
      </div>
      <div class="dropMenue" style="display: none">
        <div>
          <router-link :to="{ name: 'userManual' }">جدول المواد</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'introduction' }">أداة التخطيط</router-link>
        </div>
        <div>
          <router-link :to="{ name: 'userManual' }">جدول المواد</router-link>
        </div>
        <div style="border-bottom: 1px solid #e4e4e4">
          <router-link :to="{ name: 'introduction' }">أداة التخطيط</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "links",
  methods: {
    showOrHide(event) {
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
};
</script>

<style scoped>
*{
    transition: all .2s;
}
.parent {
  position: relative;
}
.links {
  border-radius: 15px;
  overflow: auto;
  width: 200px;
  padding: 0;
  height: 100%;
  background: white;
}

i{
    cursor: pointer;
     margin-left: 10px;

}
.link {
  border-bottom: 1px solid #e4e4e4;
  color: #555555;
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
  background: #9e9e9e;
  color: white;
}
</style>