import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
    <div className={s.banner_image}>
    <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />

    </div>
    <div>
      <div>ava + descr</div>
      <div>my posts</div>
      <div>
        <div className={s.posts}>
          <div className={`${s.item} ${s.active}`}>
            post 1
          </div>
          <div className={s.item}>
            post 2
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Profile;