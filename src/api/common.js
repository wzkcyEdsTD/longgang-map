
// import jsonp from 'jsonp'

// 直接 Vue.$axios.get 报错 get没有定义
// 将实例化的Vue赋值给一个常量
import instance from './index.js'


export default {
  getConfig() {
    // return instance.get(`api/appconfig/format`)
    return instance.get(`/api/appconfig/format`)

  },
  getZhejiangConfig() {
    
    // return instance.get(`api/appconfig/format?TdtCode=zhejiang`)
    return instance.get(`/api/TdtCode/zhejiang`)

  },
  getBeian() {
    // return instance.get(`api/beian`)
    return instance.get(`/api/beian`)

  },
//   getTdtSession() {
//     return new Promise((resolve, reject) => {
//       jsonp('https://sso.tianditu.gov.cn/login?action=console&service=http://zhejiang.tianditu.gov.cn/api/session/sso/tdt?callback=setUserInfo', {
//         name : 'setUserInfo'
//       },(err, res) => {
//         if (err) {
//           reject(err)
//         }
//         resolve(res)
//       })
//     })
//   },
//   getSession() {
//     return Vue.axios.get('/api/session', {
//       withCredentials: true
//     })
//   },
//   login(data) {
//     return Vue.axios.post(`/api/session`, data)
//   },
//   upload(data) {
//     return Vue.axios.post(`/api/attachment`, data)
//   },
//   getSpecial() {
//     return Vue.axios.get(`/api/special/format?TdtCode=zhejiang`)
//   },
//   getUsecase(params) {
//     return Vue.axios.get(`/api/usecase/format`, {
//       params
//     })
//   },
//   getStandardmap() {
//     return Vue.axios.get(`/api/standardmap/tree`)
//   },
//   getBranch() {
//     return Vue.axios.get(`/api/branch/format`)
//   },
//   getBranchTree() {
//     return Vue.axios.get(`/api/branch/tree`)
//   },
//   getBranchDic() {
//     return Vue.axios.get(`/api/branch/dic`)
//   },
//   getPanorama() {
//     return Vue.axios.get(`/api/panorama?page=-1&sort=created`)
//   },
//   getCollect() {
//     return Vue.axios.get(`/api/marker?page=-1`)
//   },
//   getMobileLast() {
//     return Vue.axios.get(`/api/mobilemap/last`)
//   },
//   getLink() {
//     return Vue.axios.get(`/api/partnerlink/format?page=-1`)
//   },
//   getDemoTree() {
//     return Vue.axios.get(`/api/example/tree`)
//   },
//   getDemoSource(path) {
//     return Vue.axios.get(`/api/example/${path}`)
//   },
//   getLog(params) {
//     return Vue.axios.get(`/api/changelog`, {
//       params
//     })
//   },
//   createFeedback(opt) {
//     return Vue.axios.post(`/api/feedback`, opt)
//   }
}