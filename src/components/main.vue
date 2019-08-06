
<template>
  <div class="bg">
    <div class="week"><span>{{week}}</span></div>
    {{ddd}}
    {{itemDetails[num-1].topic_name}}
    <div  style="color:#ffffff">afsff</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'start',
  data () {
    return {
      num: 1,
      week: '第一周',
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: mapState([
    'itemDetails',
    'ddd'
  ]),
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.bg {

  .week {
    background: url("../assets/images/1-3.png") no-repeat right;
      height: 155px;
      width: 90px;
      position: absolute;
      right: 0;
      background-size: cover;
      top: -40px;
      span {
        top: 124px;
        position: absolute;
        font-size: 12px;
        right: 24px;
      }
  }
  img {
    width: 80%;
    margin: 100px auto 0;
  }
  .start {
    a {
      background: url("../assets/images/1-4.png") no-repeat;
      width: 98px;
      height: 46px;
      display: block;
      border: none;
      margin:  0 auto;
      padding: 0;
      background-size: cover;
      /* outline: none; */
      cursor: pointer;
    }
  }
}
</style>
