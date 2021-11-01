import {createLogger} from 'vuex'

const logger = createLogger({
    collapsed: false, // auto-expand logged mutations
    filter(mutation) {
        // returns `true` if a mutation should be logged
        // `mutation` is a `{ type, payload }`
        return mutation !== "aBlocklistedMutation"
    },
    actionFilter(action) {
        // same as `filter` but for actions
        // `action` is a `{ type, payload }`
        return action.type !== "aBlocklistedAction"
    },
    transformer({user}) {
        // transform the state before logging it.
        // for example return only a specific sub-tree
        return user.authenticated
    },
    mutationTransformer(mutation) {
        // mutations are logged in the format of `{ type, payload }`
        // we can format it any way we want.
        return mutation
    },
    actionTransformer(action) {
        // Same as mutationTransformer but for actions
        return action.type
    },
    logActions: true, // Log Actions
    logMutations: true, // Log mutations
    logger: console, // implementation of the `console` API, default `console`
})
export default logger
