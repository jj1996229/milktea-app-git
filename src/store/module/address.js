import http from '@/utils/http.js'
const state = {
    address:''
}
const grtters = {}
const actions = {
    address(a,data){
        return http.get('/users/address',data)


    }

}
const mutations = {
    addAddress(state,payload){
        state.address = payload
    }
}

export default {
    namespaced: true,
    state,
    grtters,
    actions,
    mutations
}