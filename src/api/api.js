import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f05ee757-33fe-4bd2-8295-15ffca0c8738'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize= 5) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`).then( response => {
            return response.data
        })
    },
    getMe(){
        return instance.get('auth/me').then( response => {
            return response.data
        })
    },
    deleteUser(userId = 2){
        return  instance.delete(`/follow/${userId}`).then( response =>{
            return response.data
        })

    },
    followUser(userId = 2){
        return  instance.post(`/follow/${userId}`).then( response =>{
            return response.data
        })

    },


}
