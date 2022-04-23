import React, { useState, useEffect } from 'react';
import './Style/hero.css'
import Allnews from './Allnews';
export default function Slider() {
  return (
<>
<div className="py-16 bg-gradient-to-br from-green-50 to-cyan-100">  
<div className="max-w-screen-xl mx-auto p-4">
<div className="mb-12 space-y-2 text-center">
     
      <h2 className="text-2xl text-cyan-900 font-bold md:text-4xl">Trending Today</h2>
    
    </div> 
 <div className="flex flex-col md:flex-row md:h-96 md:-mx-1.5 ">
    <a href="#" className="w-full md:w-1/2 md:mx-1.5 h-72 md:h-full rounded-md relative group mb-3 md:mb-0">
      <img src="https://cdn4.premiumread.com/?url=https://thehimalayantimes.com/thehimalayantimes/uploads/images/2022/04/09/13973.JPG&w=600&q=100&f=jpg" className="absolute z-0 object-cover w-full h-72 md:h-full rounded-md" />
      <div className="absolute gradient w-full h-72 md:h-full rounded-md z-10" />
      <div className="absolute left-0 right-0 bottom-0 p-4 z-30">
        <h2 className="font-bold text-white leading-tight sm:mb-1.5 group-hover:underline text-2xl"> Nepali students urged to prepare for IELTS</h2>
        <div className="text-xs text-white hidden sm:block">
          <div className="flex items-center">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" className="h-3 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
            </svg>
            <span className="text-xs text-white">18h | thehimalayantimes</span>
          </div>
        </div>
      </div>
    </a>
    <div className="flex md:block md:w-1/4 md:mx-1.5 md:h-full -mx-1.5 md:mx-0">
      <div className="h-44 sm:h-52 mb-3 md:h-1/2 md:pb-1.5 md:mb-0 p-5 w-full mx-1.5 md:mx-0">
        <a href="#" className="h-44 sm:h-52 md:h-full block group relative rounded-md">
          <img src="https://cdn4.premiumread.com/?url=https://thehimalayantimes.com/thehimalayantimes/uploads/images/2022/04/08/13967.jpg&w=200&q=100&f=jpg" className="absolute z-0 object-cover w-full h-44 sm:h-52 md:h-full rounded-md" />
          <div className="absolute gradient w-full h-44 sm:h-52 md:h-full rounded-md z-10" />
          <div className="absolute left-0 right-0 bottom-0 p-4 z-30">
            <h2 className="font-bold text-white leading-tight mb-0 sm:mb-1.5 group-hover:underline text-sm md:text-base truncate">NRB Governor Maha Prasad Adhikari suspended</h2>
            <div className="text-xs text-white hidden sm:block">
              <div className="flex items-center">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" className="h-3 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                </svg>
                <span className="text-xs text-white">2h | thehimalayantimes </span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="h-44 sm:h-52 md:h-1/2 mb-3 md:mb-0 md:pt-1.5 p-5 w-full mx-1.5 md:mx-0">
        <a href="#" className="h-44 sm:h-52 md:h-full block group relative rounded-md">
          <img src="https://cdn4.premiumread.com/?url=https://thehimalayantimes.com/thehimalayantimes/uploads/images/2022/03/27/13622.jpg&w=200&q=100&f=jpg" className="absolute z-0 object-cover w-full h-44 sm:h-52 md:h-full rounded-md" />
          <div className="absolute gradient w-full h-44 sm:h-52 md:h-full rounded-md z-10" />
          <div className="absolute left-0 right-0 bottom-0 p-4 z-30">
            <h2 className="font-bold text-white leading-tight mb-0 sm:mb-1.5 group-hover:underline text-sm md:text-base truncate">Nepal to receive 11.4 billion rupees in Chinese aid</h2>
            <div className="text-xs text-white hidden sm:block">
              <div className="flex items-center">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" className="h-3 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                </svg>
                <span className="text-xs text-white">12h | thehimalayantimes</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div className="flex md:block md:w-1/4 md:mx-1.5 h-44 sm:h-52 md:h-full -mx-1.5 md:mx-0">
      <div className="h-44 sm:h-52 md:h-1/2 md:pb-1.5 mb-3 md:mb-0 p-5 w-full mx-1.5 md:mx-0">
        <a href="#" className="h-44 sm:h-52 md:h-full block group relative rounded-md">
          <img src="https://cdn4.premiumread.com/?url=https://thehimalayantimes.com/thehimalayantimes/uploads/images/2022/03/24/13554.jpeg&w=200&q=100&f=jpg" className="absolute z-0 object-cover w-full h-44 sm:h-52 md:h-full rounded-md" />
          <div className="absolute gradient w-full h-44 sm:h-52 md:h-full rounded-md z-10" />
          <div className="absolute left-0 right-0 bottom-0 p-4 z-30">
            <h2 className="font-bold text-white leading-tight sm:mb-1.5 group-hover:underline text-sm md:text-base truncate">
No deliberation on sexual violence in parliament due to obstruction: Minister Regmi</h2>
            <div className="text-xs text-white hidden sm:block">
              <div className="flex items-center">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" className="h-3 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                </svg>
                <span className="text-xs text-white">2d | thehimalayantimes </span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="md:h-1/2 md:pt-1.5 mb-3 md:mb-0 p-5 w-full mx-1.5 md:mx-0">
        <a href="#" className="h-44 sm:h-52 md:h-full block group relative rounded-md">
          <img src="https://cdn4.premiumread.com/?url=https://thehimalayantimes.com/thehimalayantimes/uploads/images/2022/03/23/13530.jpg&w=200&q=100&f=jpg" className="absolute z-0 object-cover w-full h-44 sm:h-52 md:h-full rounded-md" />
          <div className="absolute gradient w-full h-44 sm:h-52 md:h-full rounded-md z-10" />
          <div className="absolute left-0 right-0 bottom-0 p-4 z-30">
            <h2 className="font-bold text-white leading-tight sm:mb-1.5 group-hover:underline text-sm md:text-base truncate">UML shoulders responsibility to pursue socialism: Oli
</h2>
            <div className="text-xs text-white hidden sm:block">
              <div className="flex items-center">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" className="h-3 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                </svg>
                <span className="text-xs text-white">4d | thehimalayantimes </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>


<Allnews/>
</div>

</>  
)
}
