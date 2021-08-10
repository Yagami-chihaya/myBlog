import {getInfo} from './request'

export function getWeatherInfo(){
  const appid = '71363947'
  const appsecret = 'Ebqh7idi'  
  return getInfo({
    params:{
      appid,
      appsecret
    }
  })
}