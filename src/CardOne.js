import React from 'react'
//import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./CardOne.css"

export const CardOne  = ({
  title,
	emoji,
	subtitle,
	buttonText,
	mainColor,
	lightColor,
	btnColor,
	titleColor,
	subColor,
	btnTextColor

}) => {
  
    
  return(

    <div style={{ backgroundColor: mainColor }} className="bigCard"> 

      <div style={{ backgroundColor: lightColor }} className="light-part">

        <h1 style={{ color : subColor }}
				  > {subtitle} </h1>

        <Link to={'/Order Now'}>
          <button style={{ backgroundColor: btnColor }}> 
            <p style={{ color : btnTextColor }}
				  > {buttonText} </p> 
          </button>

        </Link>

      </div>

      <h2 style={{ color : titleColor }}
				  > {title} {emoji} </h2>
      
    </div>
  )
}