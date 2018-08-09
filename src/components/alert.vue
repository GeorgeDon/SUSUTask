<template>
    <div class='md-cont' v-show='inshowstate'>
        <div class='md-wrapper' >
            <div class='md-title'>
            <slot>
                {{title}}
            </slot>
            </div>
            <div class='md-text'>
            <slot name='text' >
                {{msg}}
            </slot>
            </div>
            <div>
                <button @click='clickOK'>"确定"</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "alert",
  props: {
      intitle:String,
      inmsg:String,
      inshowstate:Boolean
  },
  data () {
    return {
      title:this.intitle,
      msg:this.inmsg
    }
  },

  methods: {
    clickOK: function() {
      this.inshowstate=false;
    },
  }
};
</script>
<style scoped>

</style>