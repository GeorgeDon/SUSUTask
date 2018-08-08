<template>
  <div id="app">
    <myCalendar/>
    <router-view/>
  </div>
</template>

<script>
import myCalendar from '@/components/myCalendar'
export default {
  name: 'App',
  components : {myCalendar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
