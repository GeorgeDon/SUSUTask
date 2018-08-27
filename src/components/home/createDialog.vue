// 从github拷贝而来https://github.com/wwjhzc/vue-dialog/blob/master/dialog/dialog.vue
<template>
  <div class="dialog" v-show="showMask">
    <div class="dialog-container">
      <div class="dialog-title">
        任务名: <input type="text" placeholder="请输入任务名" class="title-input" v-model="taskName">
      </div>

      <div class="content">
        <div class="quill-editor-example">
          <quillEditor class='quill-editor' v-model="content"></quillEditor>
        </div>
      </div>
      <div class="btns">
        <div class="default-btn" @click="cancelBtn">
          {{cancelText}}
        </div>

        <div class="confirm-btn" @click="confirmBtn">
          {{confirmText}}
        </div>
      </div>
      <div class="close-btn" @click="cancelBtn">
        <i class="iconfont icon-close">
          <img src="../../assets/image/del.jpg" />
        </i>
      </div>
    </div>

  </div>
</template>
<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
export default {
  name: "createDialog",
  components: { quillEditor },
  props: {
    value: {},
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
      showMask: false,
      taskName: "",
      content: ""    
   
    };
  },
  methods: {
    closeMask() {
      this.showMask = false;
    },
    cancelBtn() {
      this.$emit("cancel"); //子组件可以使用 $emit 触发父组件的自定义事件
      this.closeMask();
      this.content="";
      console.log(this.taskName);
      console.log(this.showMask);
    },
    confirmBtn() {
      this.$emit("confirm");
      // this.closeMask();  
      console.log(this.content)
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
    width: 50%;
    height: 70%;
    background: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    .dialog-title {
      padding: 16px 50px 0 20px;
      height: 30px;
      .title-input {
        width: 80%;
        border: black solid 1px;
        font-size: 20px;
      }
      font-size: 20px;
    }
    .content {
      padding: 0 20px;
      margin-top: 10px;
      height: 60%;
      color: black;
      font-size: 15px;
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