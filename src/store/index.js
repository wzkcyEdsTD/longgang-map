import Vue from 'vue'
import Vuex from 'vuex'
import Common from '../api/common.js'


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        config:null
    },
    mutations:{
        config_changed(state,config){
            state.config = config
        }
    },
    actions:{
        fetchConfig({
            commit
          }) {
            Common.getConfig().then(async ({
              content
            }) => {
                console.log("Configcontent",content)
              const config = content[0]
              const {
                content: beian
              } = await Common.getBeian()
              console.log("beian",beian)
            
              config.shentu = beian[0].shentu
              config.beian = beian[0].beian
              config.wangan = beian[0].wangan
      
              if (config.tdtCode !== 'zhejiang' && (!config.conn_tel || !config.conn_email || !config.conn_blog)) {
                const {
                  content: zhejiang
                } = await Common.getZhejiangConfig()
                
              console.log("zhejiang",zhejiang)

                config.conn_tel = config.conn_tel || zhejiang[0].conn_tel
                config.conn_email = config.conn_email || zhejiang[0].conn_email
                config.conn_blog = config.conn_blog || zhejiang[0].conn_blog
              }
      
              commit('config_changed', config)
            })
          }
    }

})