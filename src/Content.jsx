import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas);
library.add(fab);
const Content = () => {
  return (
    <div className='w-full items-center flex max-w-[800px] w-full p-[20px] text-white flex-col min-h-[100vh]'>
        <div className='max-w-[800px] mt-[50px] flex flex-col items-center '>
            <h1 className='text-3xl'> Hi I am Shohruh Asildinov</h1>
            
            <p className=' indent-[250px] text-[15px]'>frontend developer</p>
            </div>
        <h1 className=' text-[20px] mt-[50px]'>Technologies I use:</h1>
        <div className='grid p-[20px] lg:flex gap-7 grid-cols-2 ml-[50px] text-[30px]'><div className='flex gap-1.5 items-center'><FontAwesomeIcon className='text-white ' icon={['fa-brands','html5']} beat/>HTML</div>

        <div className='flex gap-1.5 items-center'><FontAwesomeIcon className='text-white' icon={['fa-brands','css']} beat/>CSS</div>
        <div className='flex gap-1.5 items-center'><FontAwesomeIcon className='text-white' icon={['fa-brands','js']} beat/>JS</div>
        <div className='flex gap-1.5 items-center'><FontAwesomeIcon className='text-white' icon={['fa-brands','react']} beat/>React</div>
        <div className='flex gap-1.5 items-center'><FontAwesomeIcon className='text-white' icon={['fa-brands','github']} beat/>Github</div>
        <div>Tailwindcss</div></div>
      
    </div>
  )
}

export default Content
