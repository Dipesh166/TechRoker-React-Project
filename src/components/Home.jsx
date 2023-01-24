import React from 'react'
import vg from "../assests/2.webp"
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"


const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>Techstar</h1>
          <p>Problem Solver </p>
        </main>
      </div>

      <div className="home1">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only soltution to the take Problem
            We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id='about'>
        <div>
          <h1>Who we are ?</h1>
          <p>
            Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
            Suscipit tempora voluptate hic.
            Lorem ipsum dolor sit am Lorem ipsum
            dolor sit amet consectetur adipisicing
            elit. Doloribus quam magnam corporis.
            Vel odit ipsa eaque temporibus deleniti!
            Quam, eveniet quos ea repellendus sapient
            e enim similique, dicta nam ipsam debitis repellat! Vitae autem quod laborum nesciunt
          </p>
        </div>
      </div>

      <div className="home4" id='brands'>
      <div>
          <h1>Brand</h1>
          <article>
            <div style={{
              animationDelay: "0.3s",
            }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{
              animationDelay: "0.5s",
            }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{
              animationDelay: "0.7s",
            }}>
              <AiFillYoutube />
              <p>Google</p>
            </div>

            <div style={{
              animationDelay: "1s",
            }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

          </article>
        </div>
      </div>
    
      
   </>
  )
}

export default Home