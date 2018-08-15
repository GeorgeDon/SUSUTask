<template>
  <div class="card">
    <a @click="clickCard">{{shortText}}</a>

    <dialog-bar v-model="sendVal"  v-on:cancel="clickCancel()" @close="clickClose()" @confirm="clickConfirm()"></dialog-bar>
  </div>
</template>

<script>

import dialogBar from "./basic/myDialog.vue";

export default {
  name: "card",
  props:{
      inShortText:String,
      inAlertTitle:String,
      inAlertMsg:String
  },
  data() {
    return {
      // show: false,
      // alertTitle: "标题："+this.inAlertTitle,
      // alertMsg: "描述："+this.inAlertMsg,
      sendVal: false,
      date:"2018-8-13",
      shortText:this.inShortText
    };
  },
  components: {
    "dialog-bar": dialogBar
  },
  methods: {
    clickCard() {
      this.sendVal=true;
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
    .card{
        width: 100%;
        height: 50px;
        background-color: aqua;
        border-color:black;
        border-style:solid;
        text-align: center;   
        border-width:1px;
        margin-top: 10px;
    }
</style>
