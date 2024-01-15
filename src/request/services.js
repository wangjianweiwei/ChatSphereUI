import request from './index.js'


export function addDaysMatterService(data) {
    return request({
        method: "POST",
        url: '/api/days-matter/',
        data: data
    })
}

export function listDaysMatterService() {
    return request({
        method: "GET",
        url: '/api/days-matter/'
    })
}

export function getMessages(from_user, to_user) {
    console.log(from_user, ">>>>>>")
    console.log(to_user, "++++")
    return request({
        method: "GET",
        url: "user/messages",
        params: {from_user: from_user, to_user: to_user},

    })
}


export function loginApi(credentials) {
    return request({
        method: "POST",
        url: "/auth/login",
        data: credentials,
    })
}


export function logoutApi() {
    return request({
        method: "get",
        url: "/auth/logout",
    })
}