// initial state
const state = () => ({
    authenticated: false
})

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
    SET_AUTH(state, auth) {
        state.authenticated = auth
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}