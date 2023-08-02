import React from 'react'
import './main.css'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import img from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import img4 from '../../Assets/img(4).jpg'
import img5 from '../../Assets/img(5).jpg'
import img6 from '../../Assets/img(6).jpg'
import img7 from '../../Assets/img(7).jpg'
import img8 from '../../Assets/img(8).jpg'
import img9 from '../../Assets/img(9).jpg'

//The array named data

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle : 'San Miguel',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'From historic landmarks to breathtaking vineyards, San Miguel offers a perfect blend of cultural richness and natural beauty.'
  },

  {
    id:2,
    imgSrc: img2,
    destTitle : 'Burj Khalifa',
    location: 'Dubai',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: "Ascend to unprecedented heights and witness breathtaking panoramic views of Dubai's awe-inspiring skyline."
  },

  {
    id:3,
    imgSrc: img3,
    destTitle : 'Kyoto Temple',
    location: 'Japan',
    grade: 'CULTURAL RELAX',
    fees: '$680',
    description: "Lose yourself in the ethereal beauty of Kyoto's temples, where centuries-old craftsmanship meets spiritual enlightenment."
  },

  {
    id:4,
    imgSrc: img4,
    destTitle : 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: "Known for it's volcanic mountains, history , art & culture, food, temples and beautiful sandy beaches"
  },

  {
    id:5,
    imgSrc: img5,
    destTitle : 'Bora Bora',
    location: 'French Polynesia',
    grade: 'CULTURAL RELAX',
    fees: '$1000',
    description: "Surrender to the allure of crystal-clear waters, overwater bungalows, and coral reefs teeming with marine life in this South Pacific paradise."
  },

  {
    id:6,
    imgSrc: img6,
    destTitle : 'Santorini',
    location: 'Greece',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: "Experience breathtaking sunsets over the Aegean Sea, explore charming white-washed villages, and indulge in delectable Greek cuisine on this stunning Cycladic island."
  },

  {
    id:7,
    imgSrc: img7,
    destTitle : 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: "Unearth the ancient Inca civilization while trekking to the mesmerizing citadel of Machu Picchu, surrounded by lush Andean peaks and cloud forests."
  },

  {
    id:8,
    imgSrc: img8,
    destTitle : 'Cape Town',
    location: 'South Africa',
    grade: 'CULTURAL RELAX',
    fees: '$750',
    description: "Embrace a diverse cultural tapestry, ascend Table Mountain for breathtaking views, and discover vibrant art scenes and wildlife adventures in this coastal gem."
  },

  {
    id:9,
    imgSrc: img9,
    destTitle : 'Cairo',
    location: 'Egypt',
    grade: 'CULTURAL RELAX',
    fees: '$950',
    description: "Journey through time with awe-inspiring pyramids, Sphinx, and ancient temples, while savoring the vibrant culture and bustling markets of Egypt's capital."
  }, 
]




const Main = () => {
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {/* Using a High order array method(map). To do this we are using a list of objects in one array.
        Going to create an array named data and from that we will .map() array to fetch each destination
        at once. */}

        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
            return(
              <div key = {id} className="singleDestination">
                {/* will return single id from the map array */}

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                  </button>

                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main