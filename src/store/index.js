import { createStore } from 'vuex'
import logger from "@/store/plugins/logger";
import user from "@/store/modules/user/user";
const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        user
    },
    strict: debug,
    plugins: debug ? [logger] : []
})