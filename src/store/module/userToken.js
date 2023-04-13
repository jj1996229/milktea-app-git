

const state = {
    token:''
}
const grtters = {}
const actions = {}
const mutations = {
    updateToken(state,payload){
        state.token = payload
    }
}

export default {
    namespaced: true,
    state,
    grtters,
    actions,
    mutations
}