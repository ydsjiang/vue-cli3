import home from '@/service/home'

export default {
  state: {
    todoProcess: [],
    alreadyProcess:[]
  },

  mutations: {
    SET_TODO_PROCESS: (state, data) => {
      state.todoProcess = data
    },
    SET_ALREADY_PROCESS: (state, data) => {
      state.alreadyProcess = data
    }
  },

  actions: {
    getTodoProcess({
      commit
    }, config) {
      return new Promise((resolve, reject) => {
        home.getTodoProcess(config).then(response => {
          commit('SET_TODO_PROCESS', response)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    getAlreadyProcess({
      commit
    }, config) {
      return new Promise((resolve, reject) => {
        home.getAlreadyProcess(config).then(response => {
          commit('SET_ALREADY_PROCESS', response)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}