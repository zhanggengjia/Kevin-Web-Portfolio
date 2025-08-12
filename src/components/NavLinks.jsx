import React from 'react'
import { links } from '../data'

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id} className=''>
            <a href={href} className='capitalize text-lg tracking-width hover:text-sky-600 duration-300'>
              {text}
            </a>
          </li>
        )
      })}
    </>
  )
}

export default NavLinks