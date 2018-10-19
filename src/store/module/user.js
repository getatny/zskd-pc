const state = {
  basic: {
    username: String, // 用户名
    stuNo: String, // 学号
    email: String, // 邮箱
    realName: String, // 真实姓名
    gender: Number // 性别
  }
}

const getters = {
  basicUserInfo: state => {
    return state.basic
  }
}

const mutations = {
  setUserBasicInfo (state, userInfo) {
    state.basic = userInfo
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
