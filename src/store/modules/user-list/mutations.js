import * as types from './mutationTypes'

const mutations = {
  [types.GET_USER_LIST] (state, userList) {
    state.userList = userList
  }
}

export default mutations
