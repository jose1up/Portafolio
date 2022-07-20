import React from 'react'
import imgAvatar from '../../../icons/avatar.png'
import s from "./Avatar.module.css"


export const Avatar = () => {
  return (
    <div className={s.div}>
        <img src={imgAvatar}alt="img-avatar" className={s.imgAvatar}/>
    </div>
  )
}
