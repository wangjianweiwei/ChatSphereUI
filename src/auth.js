function setToken(token) {
    localStorage.setItem("token", token)
}

function getToken() {
    localStorage.getItem("token")
}


function removeToken() {
    localStorage.removeItem("token")
}