import React from 'react'

const data = [
  {
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
    separator: true
  },
  {
    title: "The Downsides of AI Artistry",
    description: "What are the possible adverse effects of on-demmand AI image generation?",
    separator: true
  },
  {
    title: "Is VC Funding Drying Up?",
    description: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
  }
]

const News = () => {
  return (
    <div className='bg-slate-900 py-6 px-4 md:w-96'>
        <h3 className='text-3xl text-orange-300 font-bold'>New</h3>
        <div className='w-full mt-4 flex flex-col gap-6 text-gray-100'>
          {data.map((item) => (
            <>
              <div className='flex flex-col gap-1'>
                <h5 className='text-lg font-semibold'>{item.title}</h5>
                <p className='text-sm text-gray-400'>{item.description}</p>
              </div>
              {item.separator && <hr className='bg-gray-400 border-none h-px'/>}
            </>
          ))}
        </div>
    </div>
  )
}

export default News