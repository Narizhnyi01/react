import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '5d36f521-ec6d-4c44-870c-583c032f19a0'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },

    deleteUser(userId = 2) {
        return instance.delete(`/follow/${userId}`);

    },
    followUser(userId = 2) {
        return instance.post(`/follow/${userId}`);

    },
    getProfile(userId){
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    },


}
export const authAPI = {
    getMe() {
        return instance.get('auth/me');
    }
}