import Vue from 'vue'

import * as types from './mutationTypes'

const actions = {
  getUserList ({ commit }) {
    const userCount = 10
    const endpoint = `https://api.github.com/users?per_page=${userCount}`
    return Vue.http.get(endpoint)
      .then(({ body }) => {
        commit(types.GET_USER_LIST, body)

        return Promise.resolve(body.data)
      })
      .catch(error => console.error('error while retrieving the user list', error))
  }
}

export default actions
