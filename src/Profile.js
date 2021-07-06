import React, { useState, useEffect } from 'react';


function Profile({ match }) {

      const [card, setCard] = useState([]);

      useEffect(() => {
         fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${match.params.id}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "949da18096msha764ea6f30b441cp1c5807jsnc3407eae2d10",
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            }
        }).then(response => response.json())
         .then(data => setCard(data.d));
         }, [match.params.id])

      // useEffect( () => {


      console.log(card);
      console.log(match);

   return(
          <div className="Profile-bg h-full p-5">         
            <div className="bg-black h-full border-4 border-indigo-700 rounded-lg grid-cols-1 md:h-auto grid grid-cols-4">
            <div>
               <img src={card[0].i.imageUrl} alt=""></img>
               </div>
               <div>
                  <h1 className="text-white">{card[0].l}</h1>
               </div>
               <div>
                  <h1 className="text-white">{card[0].q}</h1>
               </div>
               <div>
                  <h1 className="text-white">{card[0].s}</h1>
               </div>
              </div>
          </div>
   )
}

export default Profile;