import React from 'react'
import { FaApple } from "react-icons/fa"

const TableSection = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2">

            {/* One */}
            <div className='mt-2 md:my-2 md:mx-2 h-auto bg-cover text-center text-white flex flex-col items-center justify-between gap-40 md:gap-72 py-12 lg:py-16' style={{
                backgroundImage: "url('https://www.apple.com/v/home/cf/images/promos/ipad-pro/promo_ipadpro_avail__s271j89g8kii_large.jpg')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
             }}
             >
                <div className='space-y-3'>
                    <h1 className='text-4xl font-bold'>iPad Pro</h1>
                    <div>
                        <p className='text-xl'>Unbelievably thin. Incredibly powerful.</p>
                    </div>
                    <div className='space-x-3 md:space-x-6'>
                        <button className='px-3 py-2 md:px-4 rounded-3xl bg-blue-800 text-white'>Learn more</button>
                        <button className='px-3 py-2 md:px-4 rounded-3xl text-blue-900 border border-blue-900 hover:bg-blue-800 hover:text-white'>Buy</button>
                    </div>
                </div>
                <div>
                    <p className='text-sm font-bold'><span className='text-blue-900'>Built for</span> <span className='text-blue-600'>Apple</span> <span className='text-orange-700'>Intelligence</span></p>
                </div>
            </div>

            {/* two */}
            <div className='mt-2 md:my-2 md:mx-2 h-auto bg-cover text-center text-black flex flex-col items-center justify-between gap-48 md:gap-72 py-8 md:py-12 lg:py-16' style={{
                backgroundImage: "url('https://www.apple.com/v/home/cf/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail__b9etp10v9tn6_large.jpg')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            >
                <div className='space-y-1'>
                    <div className='relative pl-4'>
                        <h1 className='text-4xl font-bold'>Watch</h1>
                        <FaApple className='text-4xl font-bold absolute top-0 left-5' />
                        <p className='font-bold pr-4'>SERIES 10</p>
                    </div>
                    <p className='text-xl'>Thinstant classic.</p>
                    <div className='space-x-6 space-y-3'>
                        <button className='px-4 py-2 rounded-3xl bg-blue-800 text-white'>Learn more</button>
                        <button className='px-4 py-2 rounded-3xl text-blue-900 border border-blue-900 hover:bg-blue-800 hover:text-white'>Buy</button>
                    </div>
                </div>
                <div>
                </div>
            </div>

            {/* three3 */}
            <div className='mt-2 md:my-2 md:mx-2 h-auto bg-cover text-center text-white flex flex-col items-center justify-between gap-40 md:gap-72 py-12 lg:py-16' style={{
                backgroundImage: "url('https://www.apple.com/in/home/promos/mac-for-students-2/images/promo_college_students__bxqdcoxgjzw2_large.jpg')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            >
                <div className='space-y-3 pt-64 mt-64'>
                    <button className='px-3 py-2 md:px-4 rounded-3xl bg-white text-black'>Learn more</button>  
                </div>

            </div>

            {/* four 4 */}
            <div className='mt-2 md:my-2 md:mx-2 h-auto bg-cover text-center text-white flex flex-col items-center justify-between gap-48 md:gap-72 py-8 md:py-12 lg:py-16' style={{
                backgroundImage: "url('https://www.apple.com/v/home/cf/images/promos/airpods-4/promo_airpods_4_avail__bl22kvpg6ez6_large.jpg')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            >
               <div className='text-center mt-32 pt-64'>
                    <div className='space-y-1'>
                        <h1 className='text-4xl font-bold'>AirPods 4</h1>
                        <div>
                            <p className='text-xl'>Iconic. Now supersonic.</p>
                            <p className='text-xl'>Available with Active Noice Cancellation.<span className='align-super text-xs'>2</span></p>
                        </div>
                        <div className='space-x-6 space-y-3'>
                            <button className='px-4 py-2 rounded-3xl bg-blue-800 text-white'>Learn more</button>
                            <button className='px-4 py-2 rounded-3xl text-blue-900 border border-blue-900 hover:bg-blue-800 hover:text-white'>Buy</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* five5 */}
            <div className='mt-2 md:my-2 md:mx-2 h-auto bg-cover text-center text-white flex flex-col items-center justify-between gap-40 md:gap-72 py-12 lg:py-16' style={{
                backgroundImage: "url('https://www.apple.com/v/home/cf/images/promos/macbook-pro/promo_macbookpro_announce__gdf98j6tj2ie_large.jpg')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            >
                <div className='space-y-3'>
                    <h1 className='text-4xl font-bold'>MacBook Pro</h1>
                    <div>
                        <p className='text-xl'>A work of smart.</p>
                    </div>
                    <div className='space-x-3 md:space-x-6'>
                        <button className='px-3 py-2 md:px-4 rounded-3xl bg-blue-800 text-white'>Learn more</button>
                        <button className='px-3 py-2 md:px-4 rounded-3xl text-blue-900 border border-blue-900 hover:bg-blue-800 hover:text-white'>Buy</button>
                    </div>
                </div>
                <div>
                    <p className='text-sm font-bold'><span className='text-blue-900'>Built for</span> <span className='text-blue-600'>Apple</span> <span className='text-orange-700'>Intelligence</span></p>
                </div>
            </div>

            {/* six6 */}
            <div className='md:my-2 md:mx-2 h-auto bg-cover text-center text-black flex flex-col items-center justify-between gap-48 md:gap-72 py-8 md:py-12 lg:py-16' style={{
                backgroundImage: "url('https://www.apple.com/v/home/cf/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_large.jpg')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            >
                <div className='space-y-1'>
                    <div className='relative'>
                        <h1 className='text-4xl font-bold'>Trade In</h1>
                        <FaApple className='text-4xl font-bold absolute top-1 left-10' />
                    </div>
                    <p className='text-xl'>Upgrade and save. It's that easy.</p>
                    <div className='space-x-6 space-y-3 pt-3'>
                        <button className='px-4 py-1 rounded-3xl bg-blue-600 text-white'>Get your estimate</button>
                    </div>
                </div>
                <div>
                </div>
            </div>    
        </section>
    )
}

export default TableSection