import user from '@/service/user'

export default {
    state: {
        data: {},
    },

    mutations: {
        SET_DATA: (state, data) => {
            state.data = data
        }
    },

    actions: {
        getUser({ commit }) {
          return new Promise((resolve, reject) => {
            user.getUser().then(response => {
              commit('SET_DATA', response)
              resolve(response)
            }).catch(error => {
              reject(error)
            })
          })
        },
    }
}
