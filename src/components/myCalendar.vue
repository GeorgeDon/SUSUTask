<template>
  <div>
    <Calendar
      v-on:choseDay="clickDay"
      v-on:changeMonth="changeDate"
      
    ></Calendar>
    
    <!-- <alert :inshowstate="show" :intitle="alertTitle" :inmsg="alertMsg"></alert> -->
    <dialog-bar v-model="sendVal"  v-on:cancel="clickCancel()" @close="clickClose()" @confirm="clickConfirm()" ></dialog-bar>
  </div>
</template>

<script>
import Calendar from "vue-calendar-component";
// import alert from "@/components/alert";
import dialogBar from "./basic/myDialog.vue";

export default {
  name: "myCalendar",
  data() {
    return {
      show: false,
      alertTitle: "提示",
      alertMsg: "这是一个弹框",
      sendVal: false
    };
  },
  components: {
    Calendar,
    alert,
    "dialog-bar": dialogBar
  },
  methods: {
    clickDay(data) {
      // this.show = true;//弹框
      // console.log(this.show);
      this.sendVal=true;
      console.log(data); //选中某天
    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    },
    clickToday(data) {
      console.log(data); //跳到了本月
    },
    openMask(index) {
      this.sendVal = true;
      console.log(this.sendVal)
    },
    clickCancel() {
      console.log("点击了取消");
    },
    clickClose() {
      console.log("这里是关闭");
    },
    clickConfirm() {
      console.log("点击了confirm");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
