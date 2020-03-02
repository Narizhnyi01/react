const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';
let initialState = {
    users: [
        // {id: 1, followed: false, fullName: 'Viacheslav', status: 'I am learn React', location:{ country: 'Ukraine', city: 'Kharkiv'} },
        // {id: 2, followed: false, fullName: 'Dmitry', status: 'I am learn React too', location:{ country: 'Russia', city: 'Moscow'} },
        // {id: 3, followed: true, fullName: 'Anton', status: 'I am learn React too', location:{ country: 'Belarus', city: 'Minsk'} }
    ]
};
const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }

                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }

                    return u;
                })
            }
        case SET_USER:
            return { ...state, users: [...state.users, ...action.users ]}
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USER, users});



export default usersReducer;