import React, { FC, useState, useEffect, useRef, useCallback, MutableRefObject, useReducer } from 'react'
import MenuItem from './item'
import './index.less'
type MenuSubItem = {
    title: string,
}

const MenuSubItem: FC<MenuSubItem> = (props) => {
    let {  children ,title} = props
    return (
        <li className='menu-sub-item' >
            
            {/* <MenuItem >{title}</MenuItem> */}
            <div className='menu-item'>
                {title}
            </div>
            <ul className='menu-children'>
                {children}
            </ul>

        </li>
    )

}

export default MenuSubItem