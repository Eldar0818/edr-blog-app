export function loginStart(detail) {
    return {
        type: 'LOGIN_START'
    }
}

export function loginSuccess() {
    return {
        type: 'LOGIN_SUCCESS',
        payload: user
    }
}

export function loginFail() {
    return {
        type: 'LOGIN_FAIL'
    }
}

export function logOut() {
    return {
        type: 'LOGOUT'
    }
}