import React from 'react';
import { Menu } from '@headlessui/react'
import {Icon} from 'components/Icons';



export default function User() {

    const person = {
        name: 'sudhama',
        avatar: 'https://media.licdn.com/dms/image/D5603AQEOUwMVaU1gNg/profile-displayphoto-shrink_200_200/0/1701237008105?e=2147483647&v=beta&t=gq4XlCdzmv4YR54Jvuu6Y-SCQL75KMyHxQNKT4r9rec'

    }

  return (
    <Menu as="nav" className={"relative"}>
        {({open}) => (
            <>
    <Menu.Button className={`flex items-center gap-x-[6px] rounded-[23px] p-1 ${open ? 'bg-active' : 'bg-brenk'}`}>
        <img className='w-[28px] h-[28px] rounded-full' src={person.avatar} />
        <span className='text-sm font-semibold'>{person.name}</span>
        <span className={open === true && 'rotate-180'}>
            <Icon name="dir" />
        </span>
    </Menu.Button>
    <Menu.Items className="absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2 z-10">
      <Menu.Item>
        {({ active }) => (
          <a
            className={`h-10 flex px-2 text-sm font-semibold justify-between text-white opacity-80 items-center ${active && 'bg-menubg'}`}
            href="/#"
          >
            account
            <Icon name="external" />
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={`h-10 flex px-2 text-sm font-semibold justify-between text-white opacity-80 items-center ${active && 'bg-menubg'}`}
            href="/#"
          >
            Profile
          </a>
        )}
      </Menu.Item>
            <Menu.Item>
        {({ active }) => (
          <a
            className={`h-10 flex px-2 text-sm font-semibold justify-between text-white opacity-80 items-center ${active && 'bg-menubg'}`}
            href="/#"
          >
            log out
          </a>
        )}
      </Menu.Item>


    </Menu.Items>
            </>
        )}
  </Menu>
  )
}
