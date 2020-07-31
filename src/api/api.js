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
        console.warn('obsolete method. Please use profileAPI object.');
        return profileAPI.getProfile(userId);
    }


}
export const profileAPI = {

    getProfile(userId){
        return instance.get(`profile/` + userId);
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status){
        return instance.put(`profile/status`, { status: status });
    },
}
export const authAPI = {
    getMe() {
        return instance.get('auth/me');
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}