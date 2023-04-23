import { createStore } from 'vuex'
import userToken from'./module/userToken';
import addAddress from './module/addAddress';
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    modules: {
        userToken,
        addAddress
    },
    plugins: [createPersistedState({
        paths: ['userToken']
      })]

})

export default store;