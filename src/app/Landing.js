import React from 'react'
import Header from '../components/header.js'
import PrimaryBanner from '../components/banners/PrimaryBanner.js'

export const Landing = () => {
  return (
    <div className="flex flex-col h-fit 
                    bg-[url('/norparts-sa-background.png')] 
                    bg-cover bg-center pb-48">
        <Header></Header>
        <PrimaryBanner></PrimaryBanner>
    </div>
  )
}

export default Landing;