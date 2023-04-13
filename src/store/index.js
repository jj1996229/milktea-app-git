import { createStore } from 'vuex'
import userToken from'./module/userToken';
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    modules: {
        userToken
    },
    plugins: [createPersistedState({
        paths: ['userToken']
      })]

})

export default store;