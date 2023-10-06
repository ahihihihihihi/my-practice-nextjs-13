import axios from "./customize-axios"


const fetchAllUser = (page: number) => {

    return axios.get(`/api/users?page=${page}`)
}

const postCreateUser = (name: string, job: string) => {
    return axios.post(`/api/users`, { name, job })
}

const putUpdateUser = (name: string, job: string, id: number) => {
    return axios.put(`/api/users/${id}`, { name, job })
}

const deleteUpdateUser = (id: number) => {
    return axios.delete(`/api/users/${id}`)
}

const loginApi = (email: string, password: string) => {
    return axios.post(`/api/login`, { email, password })
}

export { fetchAllUser, postCreateUser, putUpdateUser, deleteUpdateUser, loginApi }