import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
export default function Notfound() {
  return (
<>

<div className="bg-indigo-900 relative overflow-hidden h-screen">
  <img src="https://i.postimg.cc/PqDDRywG/undraw-not-found-60pq.png" className="absolute h-full w-full object-cover" />
  <div className="inset-0 bg-black opacity-25 absolute">
  </div>
  <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
    <div className="w-full font-mono flex flex-col items-center relative z-10">
      <h1 className="font-extrabold text-5xl text-center text-green-50 leading-tight mt-4">
        You're alone here
      </h1>
      <p className="font-extrabold text-8xl my-44 text-cyan-100 animate-bounce">
        404
      </p>
    </div>
  </div>
</div>


</>  )
}
