import {getData} from './request'

export function getTextData(){
  return getData({
    url:'/userTextData'
  })
}
export function getVideoData(){
  return getData({
    url:'/video'
  })
}
