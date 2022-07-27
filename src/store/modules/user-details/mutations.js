import * as types from './mutationTypes'

const mutations = {
  [types.GET_REPO_DETAILS] (state, repoList) {
    state.repoList = repoList
  }
}

export default mutations
