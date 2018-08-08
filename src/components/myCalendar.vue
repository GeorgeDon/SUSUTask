<template>
  <div>
    <Calendar
      v-on:choseDay="clickDay"
      v-on:changeMonth="changeDate"
    ></Calendar>
  </div>
</template>

<script>
import Calendar from 'vue-calendar-component';
export default {
  name: 'myCalendar',
  data () {
    return {
      
    }
  },
  components: {
    Calendar
  },
  methods:{
    clickDay(data) {
      console.log(data); //选中某天
    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    },
    clickToday(data) {
      console.log(data); //跳到了本月
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
