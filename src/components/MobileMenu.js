import React from 'react'
import MobileNavItem from './buttons/MobileNavItem';

export const MobileMenu = () => {
  return (
    <div className='fixed bottom-0 left-0
                    flex justify-between
                    px-16 py-4
                    bg-brand-700
                    w-full'>
                    <MobileNavItem></MobileNavItem>
                    <MobileNavItem></MobileNavItem>
                    <MobileNavItem></MobileNavItem>
                    </div>
  )
}

export default MobileMenu;