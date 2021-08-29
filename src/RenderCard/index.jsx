import React from 'react'
import './RenderCard.css'

export const RenderCard = ({data}) => {
      return(
          <div>
              {data.color && (
              <div className='card' style={{background: data.color}}>
                 <h2>{data.title} </h2>
             </div>
              )}

              {data.color === null && (
              <div 
              className='card' 
              style={{backgroundImage: `url(${data.img})`}}>
                 <h2>{data.title} </h2>
             </div>

              )}
            
          </div>
      )

}