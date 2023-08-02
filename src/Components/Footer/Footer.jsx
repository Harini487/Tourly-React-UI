import React from 'react'
import './footer.css'
import video2 from '../../Assets/video2.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebook, FaTripadvisor} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'


const Footer = () => {
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder='Enter email address '/>
            <button className='btn flex' type='submit'>
              SEND <FiSend className="icon"/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className="icon"/>
                Tourly
              </a>
            </div>

            <div className="footerParagraph">
            Crafting extraordinary travel memories for a lifetime. 
            Trust us to handle every detail, from luxurious 
            accommodations to immersive cultural encounters. 
            Relax and immerse yourself in the world's beauty with us.
            </div>

            <div className="footerSocials flex">
              <FaFacebook className = "icon"/>
              <AiOutlineTwitter className = "icon"/>
              <FaYoutube className = "icon"/>
              <FaTripadvisor className = "icon"/>
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group One */}
            <div className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Payment
              </li>

            </div>

             {/* Group Two */}
             <div className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Booking
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                TripAdvisor
              </li>

            </div>

          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - TOURLY 2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer