import React, { useState } from 'react';
import Image from './Image';

function Data() 
{

    const [value, setValue] = useState(null)
    const [results, setResults] = useState({results: []})
    

    function GetValue(val) {
        
        setValue(val.target.value);
        console.log(value)
    }

    const getImage = () => {

        fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${value}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "949da18096msha764ea6f30b441cp1c5807jsnc3407eae2d10",
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            }
        })
        .then(res => {
            return res.json();
             })
        .then(data => {
            console.log(data.d)
            setResults({results: data.d});
            return data.d;
        })
    }

//     fetch(`https://api.harvardartmuseums.org/person?q=displayname:${value}&apikey=4f7693a2-e744-4f9b-aa9d-04cba014aaa6`)
//     .then(res => {
//         return res.json();
//          })
//     .then(data => {
//         console.log(data.records)
//         setResults({results: data.records});
//         return data.records;
//     })
// }

        

    return (
        <div>
            <div className="flex w-full md:justify-center justify-center items-end">
                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                    <label htmlFor="hero-field" className="leading-7 text-sm text-indigo-600">i.e "Claude Monet" </label>
                    <input onChange={GetValue} type="text" id="hero-field" name="hero-field" className="h-12 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-purple-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button onClick={getImage} type="submit" className="h-12 items-center inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
            <Image data={results} />
        </div>
    )
}


export default Data;