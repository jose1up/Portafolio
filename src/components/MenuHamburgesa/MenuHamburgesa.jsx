import React from 'react'
import s from "../MenuHamburgesa/MenuHamburgesa.module.css"

export const MenuHamburgesa = () => {
  return (
    <div className={s.divHamburgesa}>
    <span className={s.divHamburgesaspan}></span>
    <span className={s.divHamburgesaspan}></span>
    <span className={s.divHamburgesaspan}></span>
  </div>
  )
}
