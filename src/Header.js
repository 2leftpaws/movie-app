import React from 'react';


function Header() {
    

//   const [ header, setHeaderState ] = useState(false);

//   function toggleClass() {
//       if(header === false) {
//           return "bg-indigo-500 absolute top-0 left-0 w-full flex flex-row py-8 shadow";
//       } else {
//           return "bg-indigo-500 relative top-0 left-0 w-full flex flex-row py-8 shadow";
//       }
//   }

    return (
        <div className="flex flex-row bg-indigo-500 relative top-0 left-0 w-full py-8 shadow">
        <label htmlFor="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autoComplete="email" required className="mx-3 appearance-none rounded-lg relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm w-24" placeholder="Email address"></input>
          <label htmlFor="password" className="sr-only">Password</label>
          <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-lg relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm w-24" placeholder="Password"></input>
          <button className="mx-3 border rounded-lg px-8 text-sm hover:bg-indigo-700 font-bold">Log in</button>
       </div>
    )
}


export default Header;