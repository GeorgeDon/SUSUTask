<template>
  <div>
    留言板 {{msg}}
  </div>
</template>

<script>
export default {
  name: "MessageBoard",
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
