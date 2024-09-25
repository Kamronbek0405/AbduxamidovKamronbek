import React from 'react'

export const Footer = () => {
  return (
    <div className='w-full h-[400px] bg-vilote md:h-[300px] '>
      <div className='container w-full h-full flex flex-col md:items-start items-center px-20 lg:px-40  '>
        <h1 className='text-3xl md:text-4xl font-bold text-white mt-10 md:mt-0'>
          Contact
        </h1>
        <ul className='mt-5 flex flex-col gap-3 md:gap-5 items-center md:items-start'>
          <li>
            Address: <a href="">Toshkent vil, Botonliq tumani </a>
          </li>
          <li>
            Phone: <a href="tel:998974760405">97 476 04 05</a>
          </li>
          <li className='flex gap-2'>
            Email: <a href="mailto:abduxamidovkamronbek05@gmail.com">abduxamidovkamronbek05@gmail.com</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
