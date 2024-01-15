import {defineStore} from "pinia";

export const UserInfoStore = defineStore('userInfo', {
    state: () => {
        return {
            token: null
        }
    },
    actions: {
        set(token) {
            this.token = token
        },
        clear() {
            this.token = null
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: "userInfo",
                storage: localStorage
            }
        ]
    }
})