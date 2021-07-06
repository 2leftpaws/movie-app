import React from 'react';
import { Link } from 'react-router-dom';

function Image(data) 
{
    const array = data.data.results
    return (
           <div className="sm:grid gap-4 p-12 min-h-2 grid-container md:grid-cols-3">
               {array.map(function(result, index){
                   return ( 
                       <Link to={`/Profile/${result.id}`} key={index}>
                    <div className="bg-indigo-300 mix-blend-multiply rounded-lg shadow-xl h-full mb-8">
                        {/* <div className="bg-gray-50 h-20 flex flex-col justify-center rounded-t-lg px-3">
                        <h1 className="text-black text-left font-cardBody z-50">Title</h1>
                        </div> */}
                        <div className="py-8 px-3 flex flex-col justify-center h-full">
                        <h6 className="sm:text-center font-cardBody text-5xl md:text-6xl">{result.l}</h6>
                        </div>
                    </div>
                    </Link>
                   )
               })}
           </div>
    )
}


export default Image;
