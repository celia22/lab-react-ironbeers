import React from 'react';

import "./HomePage.css"
import beers from "../../assets/beers.png"
import newbeer from "../../assets/new-beer.png"
import random from "../../assets/random-beer.png"

const HomePage = () => {
 return(
   <div className="homepage_container">
     <div className="content_container">
        <img src={beers} className="homepage_image" alt="beers" />
        <a href="/beers" className="link">All beers</a>
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla rhoncus lectus sed ultrices. 
          Aenean rutrum porta mi, auctor cursus diam pulvinar vel. Proin vestibulum tellus eget elit blandit, 
          vel euismod enim eleifend. Nunc eleifend vestibulum mauris sit amet faucibus. Suspendisse at finibus urna. 
        </article>
     </div>

     <div className="content_container">
        <img src={newbeer} className="homepage_image" alt="beers" />
        <a href="/random-beer" className="link">Random beer</a>
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla rhoncus lectus sed ultrices. 
          Aenean rutrum porta mi, auctor cursus diam pulvinar vel. Proin vestibulum tellus eget elit blandit, 
          vel euismod enim eleifend. Nunc eleifend vestibulum mauris sit amet faucibus. Suspendisse at finibus urna. 
        </article>
     </div>

     <div className="content_container">
        <img src={random} className="homepage_image" alt="beers" />
        <a href="/new-beer" className="link">New beer</a>
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla rhoncus lectus sed ultrices. 
          Aenean rutrum porta mi, auctor cursus diam pulvinar vel. Proin vestibulum tellus eget elit blandit, 
          vel euismod enim eleifend. Nunc eleifend vestibulum mauris sit amet faucibus. Suspendisse at finibus urna. 
        </article>
     </div>

   </div>
 ) 
}

export default HomePage