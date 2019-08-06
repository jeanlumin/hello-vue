<template>
  <div class="bg">
      <!-- <p style="color: ">{{time}}</p> -->

    <div class="score">
      <p>{{score}}分</p>
      <p>{{info}}</p>
    </div> 
    <img @click="share()" src="../assets/images/4-3.png" alt="">
    <p class="share">关注葡萄之家，获取答案。</p>
    <img src="../assets/images/4-4.png" alt="">

    <div class="shadow" @click="show=false" v-show="show">
      <img src="../assets/images/5-2.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'start',
  data () {
    return {
      score: localStorage.getItem('scope'),
      info: '',
      show:false,
    }
  },
  methods: {
    share() {
      this.show =true
    }
  },
  mounted() {
    if(this.score < 60){
      this.info = "你说，是不是把知识都还给小学老师了？"
    } else if(this.score == 60){
      this.info = "继续努力！"
    } else if(this.score == 80){
      this.info = "智商离爆表只差一步了！"
    }else if(this.score == 100){
      this.info = "智商爆表！"
    }
  },
}
</script>

<style scoped lang="less">
.bg {
  background: url("../assets/images/4-1.jpg") no-repeat;
  height: 100%;
  background-size: cover;
  padding: 0;
  position: relative;
  .shadow{
    position: absolute;
    background: url("../assets/images/5-1.png") no-repeat;
    top: 0;
    background-size: 100% 100%;
    height: 100%;
    img {
      width: 80%;
    }
  }
  .score {
    background: url("../assets/images/4-2.png") no-repeat;
    height: 180px;
    background-size: 100% 100%;
    width: 64%;
    margin: 0 auto;
    position: relative;
    p {
      margin: 0;
      padding: 0;
      position: absolute;
      font-size: 36px;
      &:first-child {
        left: 68px;
        top: 80px;
        color: #a51d31;
      }
      &:last-child {
        font-size: 14px;
        left: 30px;
        top: 130px;
        word-wrap:break-word;
        width: 160px;
        text-align: center;
      }
    }
  }
  img {
    width: 38%;
    margin: 20px auto;
  }
  .share {
    font-size: 14px;
    width: 180px;
    margin: 0 auto;
  }
}
</style>
