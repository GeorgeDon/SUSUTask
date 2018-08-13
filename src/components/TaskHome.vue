<template>
    <div class="task-home">
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
.task-home{
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
