<template>
    <div class="left-box">
        <div class="split-left-box">
            <div class="left-card">
                任务栏
            </div>
            <div class="left-card"> 
                待定   
            </div>
        </div>
        <div class="split-right-box">
            <div class="spot">
                . . .
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "leftMenu"
};
</script>

<style>
.left-card {
  text-align: center;
  margin-left: 2px;
  border: 1px solid black;
  margin-top: 2px;
  margin-right: 2px;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: KaiTi;
  width: 100%;
  box-shadow: 4px 4px #f0f0f0;
}
.left-box {
  width: 100%;
  height: 100%;
}
.split-left-box {
  float: left;
  width: calc(100% - 16px);
}
.split-right-box {
  border: 1px solid black;
  height: 100%;
  float: right;
  width: 5px;
}
.spot {
  position: relative;
  top: 45%;
}
</style>