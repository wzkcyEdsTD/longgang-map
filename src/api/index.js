import axios from 'axios'

const instance = axios.create({
    // baseURL:'http://www.zjditu.cn',
    timeout: 10000,
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    withCredentials:true
})

instance.defaults.withCredentials=true

instance.interceptors.response.use(res=>{
    return res.data
},err=>{
    console.log(err)
})


export default instance