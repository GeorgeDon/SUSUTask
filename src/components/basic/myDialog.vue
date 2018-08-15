// 从github拷贝而来https://github.com/wwjhzc/vue-dialog/blob/master/dialog/dialog.vue
<template>
    <div class="dialog" v-show="showMask">
        <div class="dialog-container">
            <div class="dialog-title"></div>
            <!-- <div class="danger-btn" @click="closeBtn">
                <image src="D:\SUSUTask\src\image\DelIcon.jpg"/>
                    
            </div> -->
            <div class="content" ></div>
            <div class="btns">
                
                <div  class="default-btn" @click="cancelBtn">
                    {{cancelText}}
                </div>
                
                <div class="confirm-btn" @click="confirmBtn">
                    {{confirmText}}
                </div>
            </div>
            <div class="close-btn" @click="closeMask"><i class="iconfont icon-close">
                <img src="../../image/del.jpg"/>
            </i></div>
        </div>
        
    </div>
</template>
<script>
export default {
  name: "myDialog",
  props: {
    value: {},
    // 类型包括 defalut 默认， danger 危险， confirm 确认，
    // type:{
    //     type: String,
    //     default: 'default'
    // },
    // content: {
    //     type: String,
    //     default: ''
    // },
    // title: {
    //     type: String,
    //     default: ''
    // },
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmText: {
      type: String,
      default: "确认"
    }
  },
  data() {
    return {
      showMask: false
    };
  },
  methods: {
    closeMask() {
      this.showMask = false;
    },
    cancelBtn() {
      this.$emit("cancel"); //子组件可以使用 $emit 触发父组件的自定义事件
      this.closeMask();
    },
    closeBtn() {
      this.$emit("close");
      this.closeMask();
    },
    confirmBtn() {
      this.$emit("confirm");
      this.closeMask();
    }
  },
  mounted() {
    this.showMask = this.value;
  },
  watch: {
    value(newVal, oldVal) {
      this.showMask = newVal;
    },
    showMask(val) {
      this.$emit("input", val);
    }
  }
};
</script>
<style lang="less" scoped>
.dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  .dialog-container {
    width: 500px;
    height: 380px;
    background: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    position: relative;
    .dialog-title {
      width: 100%;
      height: 60px;
      font-size: 18px;
      color: #696969;
      font-weight: 600;
      padding: 16px 50px 0 20px;
      box-sizing: border-box;
    }
    .content {
      color: #797979;
      line-height: 26px;
      padding: 0 20px;
      box-sizing: border-box;
    }
    .inp {
      margin: 10px 0 0 20px;
      width: 200px;
      height: 40px;
      padding-left: 4px;
      border-radius: 4px;
      border: none;
      background: #efefef;
      outline: none;
      &:focus {
        border: 1px solid #509ee3;
      }
    }
    .btns {
      width: 100%;
      height: 60px;
      // line-height: 60px;
      position: absolute;
      bottom: 0;
      left: 0;
      text-align: right;
      padding: 0 16px;
      box-sizing: border-box;
      & > div {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        padding: 0 14px;
        color: #ffffff;
        background: #f1f1f1;
        border-radius: 8px;
        margin-right: 12px;
        cursor: pointer;
      }
      .default-btn {
        color: #787878;
        &:hover {
          color: #509ee3;
        }
        float: left;
      }
      .danger-btn {
        background: rgb(37, 89, 167);
        &:hover {
          background: rgb(46, 24, 168);
        }
        &:active {
          background: #1f8c81;
        }
      }
      .confirm-btn {
        color: #ffffff;
        background: #509ee3;
        &:hover {
          background: #6fb0eb;
        }
      }
    }
    .close-btn {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 18px;
      cursor: pointer;
      &:hover {
        font-weight: 600;
      }
    }
  }
}
</style>