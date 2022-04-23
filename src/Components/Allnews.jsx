import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";

export default function Allnews() {
    const [allnews, setAllnews]= useState([]);
    useEffect(()=>{
       getAllnews();
    },[])
    function getAllnews(){
        axios.get(`https://newsapi.org/v2/everything?q=world&apiKey=e3fd36ba7f564e6897a2ae73c4beaa4d`)
        .then(function (response) 
        {
            // console.log(response.data.articles)
            setAllnews(response.data.articles)
    })
    };
  return (
      <>
<div className="py-16 bg-gradient-to-br from-green-50 to-cyan-100">  
  <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
  <div className="mb-12 space-y-2">
     
     <h2 className="text-2xl text-cyan-900 font-bold md:text-4xl">Top-news</h2>
   
   </div>
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
     
      {allnews.map((m) =>(
         
     <div className="group relative ">
     <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
   <img src={m.urlToImage}  className="w-full h-full object-center object-cover lg:w-full lg:h-full" /> 
     </div>
     

     <div className="mt-4 flex justify-between">
       <div>
         <h3 className="text-sm text-amber-400">
         <Link to={`/detail/${m.source.id}`}> 
             <span aria-hidden="true" className="absolute inset-0" />
             
             {m.publishedAt}
             </Link> 
                      </h3>
         <p className="mt-1 text-lg text-gray-800">{m.title}</p>
         <p className="mt-1 text-lg text-gray-800">Readmore</p>

       </div>
     </div>
   </div>
   

   ))}
    </div>
  </div>
</div>

      </>
  )
}
