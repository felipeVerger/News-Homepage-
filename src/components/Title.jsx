import React from 'react'

const Title = () => {
  return (
    <div className='flex flex-col justify-between items-start gap-6 md:flex-row'>
      <h1 className='text-5xl font-bold text-gray-900 '>The Bright Future of Web 3.0?</h1>
      <div className='flex flex-col items-start gap-8'>
        <p className='text-gray-600'>We dive into yhe next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fullfiling its promise?</p>
        <button className=' w-44 bg-red-400 text-gray-100 uppercase py-2'>Read more</button>
      </div>
    </div>
  )
}

export default Title