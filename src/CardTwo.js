import React from 'react'
import { CardOne } from 'react-router-dom'
//import "./Card.css"
import "./index.css"

export const CardTwo = ({
  title, 
  emoji, 
  mainColor, 
  lightColor, 
  titleColor, 
}) => {

  return (

    <article>
      <section style={{ backgroundColor: mainColor }} className="bigCard-section2"> 

         <h1 style={{ color : titleColor }}
				  > {title} </h1> 

         </section>

      <section style={{ backgroundColor: lightColor }} className="light-part-section2">

        <p> {emoji} </p>
        
      </section>

      </article>
  )
}