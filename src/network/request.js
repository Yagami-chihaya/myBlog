import axios from 'axios'



export function getInfo(config){
  const instance = axios.create({
    baseURL:'https://tianqiapi.com/free/day',
    timeout:3000,
  })
  instance.interceptors.request.use(config=>config,err=>{console.log(err);})
  console.log(instance(config));
  return instance(config)
}
export function getData(config){
  const instance = axios.create({
    baseURL:'http://localhost:3000',
    timeout:2000,
    httpAgent:''
  })
  instance.interceptors.request.use(config=>config,err=>{console.log(err);})
  return instance(config)
}
