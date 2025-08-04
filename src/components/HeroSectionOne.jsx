import React from 'react'

const HeroSectionOne = () => {
    return (
        <section className='min-h-screen bg-cover text-center flex flex-col items-center justify-between py-24 md:py-16 lg:py-10' style={{
            backgroundImage: "url('https://www.apple.com/v/home/cf/images/heroes/macbook-air/hero_macbook_air_avail__fpm99qgohx2e_largetall.jpg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        
        }}
        >
            
                <div className='space-y-4 text-center px-4 md:px-8 lg:px-16'>
                    <h1 className='text-3xl md:text-5xl font-bold'>MacBook Air</h1>
                    <div>
                        <p className='text-xl md:text-2xl'>Shy Blue Color</p>
                        <p className='text-xl md:text-2xl'>Shy high performance with M4.</p>
                    </div>
                    <div className='space-x-3 md:space-x-6'>
                        <button className='px-3 py-2 md:px-4 rounded-3xl bg-blue-800 text-white'>Learn more</button>
                        <button className='px-3 py-2 md:px-4 rounded-3xl text-blue-900 border border-blue-900 hover:bg-blue-800 hover:text-white'>buy</button>
                    </div>
                </div>
                <div>
                    <p className='text-sm md:text-xl font-bold '><span className='text-blue-900'>Built for</span> <span className='text-blue-600'>Apple</span> <span className='text-orange-700'>Intelligence</span></p>
                </div>
            
        </section>
    )
}

export default HeroSectionOne