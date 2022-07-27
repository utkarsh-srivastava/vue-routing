import Vue from 'vue'

import * as types from './mutationTypes'

const actions = {
  getUserDetails ({ commit }, userId) {
    const endpoint = `https://api.github.com/users/${userId}/repos`
    return Vue.http.get(endpoint)
      .then(({ body }) => {
        commit(types.GET_REPO_DETAILS, body)

        return Promise.resolve(body.data)
      })
      .catch(error => console.error('error while retrieving the user details', error))
  }
}

export default actions
