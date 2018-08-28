<template>  
  <div class="Message">
    <div class="leaveMsg">
    <div class="msg">
      留言吧：
    </div>
    <div class="msgUser">
      留言者: <input type="text" placeholder="请输入用户名" v-model="userName">
    </div>
    <textarea class="textBox" v-model="msg">

    </textarea>
    <div class="confirm-btn" @click="confirmBtn">
          {{confirmText}}
    </div>
    <div class="msgList">
      
    </div>

  </div>
  </div>
</template>

<script>
export default {
  name: "MessageBoard",
  props: {
    confirmText: {
      type: String,
      default: "提交"
    }
  },
  data() {
    return {
      userName: "",
      msg: ""
    };
  },
  methods: {
    confirmBtn() {
      this.$emit("confirm");
      // this.closeMask();
      console.log(this.content);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.Message {
  margin-left: 10px;
}
.msgUser {
  padding: 16px 50px 0 0;
  height: 30px;
  font-size: 20px;
}
input {
  width: 30%;
  border: black solid 1px;
  font-size: 20px;
}
.msg {
  font-size: 30px;
}
.textBox {
  width: 45%;
  height:80px;
  border: black solid 1px;
  margin-top: 20px;
  font-size: 20px;
}
.confirm-btn {
  color: #ffffff;
  background: #509ee3;
  height: 30px;
  width: 40px;
  border-radius:5px; 
  padding: 0 14px;
  font-size: 20px;
  line-height: 30px;
  cursor: pointer;
  &:hover {
    background: #6fb0eb;
  }
  margin-top: 20px;
}
</style>
