<template>
  <div class="clock" @click="show">
    <div class="time">
      <p>当前城市:<span>{{WeatherData.city}}</span> 当前风速:<span>{{WeatherData.win+' '+WeatherData.win_speed+' '+WeatherData.win_meter}}</span> 空气质量:<span>{{WeatherData.air}}</span></p>
      <p>当前温度:<span :style="getTemperature(WeatherData.tem)">{{WeatherData.tem}}°c</span> 最高温度:<span :style="getTemperature(WeatherData.tem_day)">{{WeatherData.tem_day}}°c</span> 最低温度:<span :style="getTemperature(WeatherData.tem_night)">{{WeatherData.tem_night}}°c</span></p>
      <p>天气:<span>{{WeatherData.wea}}</span> 上一次更新于:<span>{{WeatherData.update_time}}</span></p> 
      <h1 class="timeClock">{{time}}</h1>
    </div>
  </div>
</template>

<script>
import {getWeatherInfo} from '../../../network/weather'

export default {
  el: '',
  data () {
    return {
      WeatherData:{
        type:Object,
        default:{}
      },
      time:{
        type:String,
        default:''
      },
      
    }
  },
  methods: {
    show(){
      console.log(typeof(this.WeatherData.tem));
    },
    howTime(){
      const newDate = {}
      setInterval(() => {
        const newDate = new Date()
        this.time = newDate.toLocaleString()
        
      }, 1000);
      
    },
    getTemperature(value){
      const tem = Number(value)
      
      if(tem<10){
        return 'color: rgb(1, 255, 242) !important;'
      }else if(tem>=10&&tem<25){
        return 'color:rgb(0, 221, 0) !important;'
      }else if(tem>=25&&tem<30){
        return 'color: rgb(238, 255, 0) !important;'
      }else if(tem>=30&&tem<35){
        return 'color: rgb(255, 145, 0) !important;'
      }else {
        return 'color: red !important;'
      }
    }
  },
  
  created(){
    getWeatherInfo().then(res=>{
      this.WeatherData = res.data
    })
    this.howTime()
    
  }
}
</script>

<style scoped>
  .clock{
    
    margin-left:calc(100% - 400px);
    margin-top:20px;
    
  }
  .time{
    
    width: 400px;
    height: 200px;
    
    
    color: rgb(255, 255, 255);
    
    
  }
  .time p{
    font-size: 8px;
    color: rgb(255, 255, 255);
  }
  .time span{
    color: rgb(0, 255, 213);
    font-size: 16px;
    font-weight: bolder;
  }
  .timeClock{
    color: rgb(255, 255, 255);
    margin-top: 50px;
    font-size: 32px;
    font-weight: bolder; 
    text-shadow: 3px 3px 3px palevioletred;
  }
  
</style>
