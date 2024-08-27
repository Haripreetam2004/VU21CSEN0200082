import React from 'react'

const product2 = ({imgurl}) => {
  return (
    <div>
        <div style={{alignItems:"center"}}>
      <img src={imgurl} alt="" />
      <div className="details">
      <h3>8GB RAM, 512GB SSD, Windows 11, Black Body</h3>
      </div>
    </div>
    </div>
  )
}

export default product2
