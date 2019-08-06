<template>
  <div class="bg">
      <div class="week"><span>{{ itemDetails[num-1].topic_name }}</span></div>
      <div class="main">
        <div class="question">{{ itemDetails[num-1].active_title }}</div>
        <div class="answer" v-for="(item, index) in itemDetails[num-1].topic_answer" :key="index"  @click="selectAnswer(index,item.is_standard_answer)">
          <p :class='{"active": selectedIndex==index}'><span>{{typeChange(index)}}</span> {{ item.answer_name }}</p>
        </div>
      </div>

    <div class="start"><a :class="{'submit': flag}" @click="next()"></a></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'start',
  data () {
    return {
      // week: '第一周',
      num: 1,
      selectedIndex: null,
      selectedAnswer: null,
      rightNum: 0,
      score: '',
      flag: false,
      // msg: 'Welcome to Your Vue.js App'
    }
  },
   computed: mapState([
    'itemDetails',
    
  ]),
  methods: {
    typeChange(index) {
      switch(index){
        case 0: return 'A';
        case 1: return 'B';
        case 2: return 'C';
        case 3: return 'D';
      }
    },
    selectAnswer(index, answer) {
      // console.log(answer)
      this.selectedIndex = index
      this.selectedAnswer = answer
      if(this.selectedAnswer == 1){
        this.rightNum += 1
        //  console.log(this.rightNum)
      }
    },
    next(){
      if ( this.selectedIndex == null) {
        alert("你还没有作出选择")
      }else{
        if(this.num < this.itemDetails.length){
          console.log(this.num)
          if(this.num == this.itemDetails.length-1){
            this.flag = true
          }
          this.num += 1;
          this.selectedIndex = null
        } else {
          
          this.scope= (this.rightNum/this.itemDetails.length)*100
          localStorage.setItem('scope', this.scope) 
          this.$router.push({name: 'score' })
        }
      }
    }
  },
  mounted() {
  },
}
</script>

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
  .main {
    color: #ffffff;
    padding-top: 120px;
    width: 80%;
    margin: 0 auto;
    background:url("../assets/images/2-1.png") no-repeat center 100px;
    background-size: contain;
    .question {
      // text-align: left;
    }
    .answer {
      p {
        &.active {
          color: red;
        }
      }
      span {
        
        // text-align: left;
        margin: 0 8px;
      }
    }
  }
  .start {
    a {
      background: url("../assets/images/2-2.png") no-repeat;
      width: 98px;
      height: 46px;
      display: block;
      border: none;
      margin:  0 auto;
      padding: 0;
      background-size: cover;
      cursor: pointer;
      &.submit {
        background: url("../assets/images/3-1.png") no-repeat;
        background-size: cover;
      }
    }
  }
}
</style>
