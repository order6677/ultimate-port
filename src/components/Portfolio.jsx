import React from 'react'
import imm from '../assets/imm.png'
import istall from '../assets/istall.png'
import json from '../assets/json.jpeg'
import form from '../assets/form.jpeg'

const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src:json
        },
        {
            id:2,
            src:istall
        },
        {
            id:3,
            src:imm
        },
        {
            id:1,
            src:json
        },
    ]
  return <div name="porfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white
  md:h-screen">

    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">


        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

            <div className="pb-8">

            <p className="text-4xl font-bold inline border-b-4 border-gray-500">portfolio</p>
            <p className="py-6">check out some of my work right here</p>
        </div>
        <div 
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12
                  sm:px-0"
                  >
        {
            portfolios.map(({id,src})=>(

                
            <div className="shadow-md shadow-gray-600 rounded-lg">
                <img src={src} alt ="" className="rounded-md duration-200 hover:scale-105"/>
                <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                </div>
            </div>
        

            ))

            
        }
        </div>
    </div>
   </div>
  </div>

  
}

export default Portfolio