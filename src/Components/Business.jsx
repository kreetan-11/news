import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";


export default function Business() {
    const [business, setBusiness]= useState([]);
    useEffect(()=>{
       getBusiness();
    },[])
    function getBusiness(){
        axios.get(`https://newsapi.org/v2/everything?q=Business&apiKey=e3fd36ba7f564e6897a2ae73c4beaa4d`)
        .then(function (response) 
        {
            // console.log(response.data.articles)
            setBusiness(response.data.articles)
    })
    };
  return (
   < >
 <div className="py-16 bg-gradient-to-br from-green-50 to-cyan-100">  
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
    <div className="mb-12 space-y-2 text-center">
     
      <h2 className="text-2xl text-cyan-900 font-bold md:text-4xl">Business-news</h2>
    
    </div>
    <div className="grid gap-12 lg:grid-cols-2">
        {business.map((q)=>(
            <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
        <img src={q.urlToImage}  loading="lazy" alt='Image' width={1000} height={667} className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
        <div className="sm:w-7/12 pl-0 p-5">
          <div className="space-y-2">
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-cyan-900">{q.title}</h4>
              <p className="text-gray-600 truncate	"> {q.description} </p>
            </div>
            <Link to={`/Detail/${q.source.id}`} className="block w-max text-cyan-600"> Read more </Link>          </div>
        </div>
      </div>
        ))}
     
     
    </div>
  </div>
</div>

 </>

   
  )
}
