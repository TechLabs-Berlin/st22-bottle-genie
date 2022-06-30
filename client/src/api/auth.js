import service from "./service"

export const signup = (name, password, email) => {
    const requestBody = { email, password, name }
    return service.post('/auth/signup', requestBody)
}

// login
// export const login = (name, password, email)
