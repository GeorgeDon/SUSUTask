<template>
    <div class="task-home">
        <div class="create">
           <button class="create-btn">创建项目</button>
        </div>
        <div class="list">
            <span class="title">待办项目</span>
            <ul>
                <li>
                    <card :inShortText="clickme"></card>
                </li>
            </ul>
        </div>
        <div class="list">
            <span class="title">进行中</span>
            <ul>
                <li>
                    <card :inShortText="clickme"></card>
                </li>
            </ul>
        </div>
        <div class="list">
            <span class="title">已完成</span>
            <ul>
                <li>
                    <card :inShortText="clickme"></card>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import dialogBar from "./basic/myDialog.vue";
import card from "@/components/card";
export default {
  name: "TaskHome",
  components: { card },
  data() {
    return {
      clickme: "点击我"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.create{
    margin-left: 10%;
    margin-top: 20px;
}
.create-btn {
  background: #b59d5a;
  background-image: -webkit-linear-gradient(top, #77b55a, #72b352);
  background-image: -moz-linear-gradient(top, #77b55a, #72b352);
  background-image: -ms-linear-gradient(top, #77b55a, #72b352);
  background-image: -o-linear-gradient(top, #77b55a, #72b352);
  background-image: linear-gradient(to bottom, #77b55a, #72b352);
  -webkit-border-radius: 4;
  -moz-border-radius: 4;
  border-radius: 4px;
  text-shadow: 0px 1px 0px #5b8a3c;
  -webkit-box-shadow: 8px 15px 10px -7px #3e7327;
  -moz-box-shadow: 8px 15px 10px -7px #3e7327;
  box-shadow: 8px 15px 10px -7px #3e7327;
  font-family: Arial;
  color: #ffffff;
  font-size: 16px;
  padding: 12px 30px 12px 30px;
  border: solid #4b8f29 1px;
  text-decoration: none;
}

.create-btn:hover {
  color: #ffffff;
  background: #72b352;
  text-decoration: none;
}
.task-home {
  width: 100%;
}
.list {
  width: 20%;
  padding: 5px 30px;
  margin-top: 50px;
  margin-left: 6%;
  border: 2px solid black;
  display: inline-block;
}
span.title {
  display: block;
  width: 150px;
  height: 30px;
  position: relative;
  top: -15px;
  text-align: center;
  background: white;
}
</style>
