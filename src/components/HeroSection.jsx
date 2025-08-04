import React from 'react'

const HeroSection = () => {
  return (
    <section className='h-screen bg-cover my-4 md:my-2 py-16 md:py-8 lg:py-4 text-center'  style={{
       backgroundImage: "url('https://www.apple.com/v/home/cf/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_largetall.jpg')",
       backgroundPosition: "center",
       backgroundRepeat: "no-repeat",
       backgroundSize: "cover"
      
    }}
    >
      <div className=' space-y-2'>
        <h1 className='text-3xl md:text-6xl font-bold'>iPhone</h1>
        <p className='text-xl md:text-2xl'>Meet the iPhone 16 family</p>
        <div className='space-x-3 md:space-x-6'>
          <button className='px-3 py-2 md:px-4 rounded-3xl bg-blue-800 text-white'>Learn more</button>
          <button className='px-3 py-2 md:px-4 rounded-3xl text-blue-900 border border-blue-900 hover:bg-blue-800 hover:text-white'>Shop iPhone</button>
        </div>
        <p className='text-sm md:text-xl font-bold pt-5'><span className='text-blue-900'>Built for</span> <span className='text-blue-600'>Apple</span> <span className='text-orange-700'>Intelligence</span></p>
      </div>
    </section>
  )
}

export default HeroSection