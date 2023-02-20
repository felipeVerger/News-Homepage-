import Image from 'next/image'

const data = [
  {
    image: '/retro.jpg',
    number: '01',
    title: 'Reviving Retro PCs',
    description: 'What happens when old PCs are given modern upgrades?'
  },
  {
    image: '/laptop.jpg',
    number: '02',
    title: 'Top 10 Laptops of 2022',
    description: 'Our best picks for various needs and budgets.'
  },
  {
    image: '/gaming.jpg',
    number: '03',
    title: 'The Growth of Gaming',
    description: 'How the pandemic has sparked fresh opportunities.'
  },
]

const Footer = () => {
  return (
    <div className='mt-8 flex flex-col justify-between gap-6 md:flex-row'>
      {data.map((item, i) => (
        <div key={i} className="flex gap-4">
          <Image src={item.image} alt={item.title} width={100} height={100}/>
          <div className='flex flex-col gap-2'>
            <h4 className='text-4xl font-semibold text-gray-400'>{item.number}</h4>
            <h5 className='text-md font-bold text-black'>{item.title}</h5>
            <p className='text-sm text-gray-400'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Footer