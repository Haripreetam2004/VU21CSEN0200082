import React from 'react'

const product = ({imgurl}) => {
  return (
    <div style={{alignItems:"center"}}>
      <img src={imgurl} alt="" />
      <div className="details">
      <h3>8GB RAM, 512GB SSD, Windows 11, Black Body</h3>
      </div>
    </div>
  )
}

export default product

