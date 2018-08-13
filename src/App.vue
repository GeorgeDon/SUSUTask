<template>
  <div>
    <div id="main_menu">

    </div>
    <div id="app" class="home">
      <div class="left_menu">
        <leftMenu/>
      </div>
      <div class="project">  
        <router-view/>
      </div>
      <div class="support">
        <myCalendar/>
      </div>

    </div>
    <div id="foot">

    </div>
  </div>
</template>

<script>
import myCalendar from "@/components/myCalendar";
import leftMenu from "@/components/leftMenu";
export default {
  name: "App",
  components: { myCalendar, leftMenu }
};
</script>

<style>
#main_menu {
  height: 60px;
  background-color: aqua;
}
#foot {
  position: absolute;
  top: 95%;
  right: 0;
  left: 0;
  bottom: 0px;
  background-color: yellow;
}
.home {
  position: absolute;
  top: 60px;
  right: 0;
  left: 0;
  bottom: 5%;
}
.left_menu {
  width: 10%;
  float: left;
  height: 100%;
}
.project {
  border: 1px solid pink;
  float: left;
  height: 100%;
  width: 74%;
}
.support {
  width: 15%;
  float: right;
  background-color: red;
  border: 1px solid black;
}
</style>