import React from 'react'

const Hero = () => {
    return (

        <section className='h-auto bg-cover py-20' style={{
            backgroundImage: "url('https://www.apple.com/v/home/cf/images/heroes/bts-2025/hero_bts_2025__kjxalx8t7ia2_largetall.jpg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}
        >
            <div className='flex justify-center flex-col items-center gap-3 py-5'>
                <div className='relative'>
                    <h1 className='font-bold text-4xl lg:text-4xl bg-blue-600 text-white text-left rounded-3xl w-60 px-7 py-3'>Buy Mac or iPad for College</h1>
                   
                    <div className='absolute top-6 -right-3 md:top-4 md:-right-6 lg:top-10 lg:-right-10'><img src="https://www.apple.com/v/home/cf/images/heroes/bts-2025/hero_sticker_ipadair__bk6ffplndvte_largetall.png" alt="" className='w-12 md:w-16' /></div>\
                     <div className='absolute -top-10 -right-4 md:-top-16 md:-right-2 lg:-top-10 lg:-right-16'><img src="https://www.apple.com/v/home/cf/images/heroes/bts-2025/hero_sticker_mba__b0ht7774wpaq_largetall.png" alt="" className='w-24 md:w-32' /></div>
                    
                </div>
                <h2 className='font-bold bg-blue-600 text-white text-center rounded-3xl w-60 px-2 py-1'>With education savings*</h2>
                <div className='relative pb-4'>
                    <h1 className='font-bold text-4xl bg-blue-600 text-white text-left rounded-3xl w-60 p-4 '>Choose AirPods or an eligible accerary
                        <span className='text-xs align-super'>1</span></h1>
                    <img src="https://www.apple.com/v/home/cf/images/heroes/bts-2025/hero_sticker_genmoji__dixanrcsc2gm_largetall.png" alt="" className='absolute -top-3 -left-9' />
                </div>
                <button className='px-4 py-2 rounded-3xl text-blue-600 border border-blue-900 hover:bg-blue-800 hover:text-white'>Shop</button>
            </div>
        </section>



    )
}

export default Hero