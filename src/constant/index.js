const G = {
  INTERVAL: {
    FAST: 1000 * 5,
    FAST_NORMAL: 1000 * 10,
    SLOW_NORMAL: 1000 * 15,
    NORMAL: 1000 * 30
  },
  ROUTER:{
    HOME:'/home'
  },
  /*接口*/
  API: {
    USER: 'getUserInfomation', // 获取用户信息
    // 首页
    HOME: {
      GET_TODO_PROCESS:'/getUpcomingTasks?type=ProductRiskLibray',   // 首页待办流程
      GET_ALREADY_PROCESS:'/getCompletedTasks?type=ProductRiskLibray'  // 首页已办流程
    }
  }
}

export default G