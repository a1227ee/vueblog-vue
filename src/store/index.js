import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:localStorage.getItem("token"),
    userInfo:JSON.parse(localStorage.getItem("userinfo"))
  },
  mutations: {
    SET_TOKEN:(state,token) => {
      state.token=token;
      localStorage.setItem("token",token);
    },
    SET_USERINFO:(state,userinfo) => {
      state.userinfo=userinfo;
      localStorage.setItem("userinfo",JSON.stringify(userinfo));
    },
    REMOVE_INFO:(state)=>{
      state.token="";
      state.userInfo= {};
      localStorage.removeItem("userinfo")
      localStorage.removeItem("token")
    }

  },
  getters:{
    getUser:state => {
      return state.userInfo;
    },

  },
  actions: {
  },
  modules: {
  }
})
