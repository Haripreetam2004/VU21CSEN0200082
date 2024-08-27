import React from 'react'

const productBox1 = ({imgurl}) => {
  return (
    <div>
      <div>
      <div className="container" style={{display:"flex", justifyContent:"space-between",color:"black",textDecoration:"none" ,alignItems:"center", flexDirection:"column", border:"2px solid black",padding:"10px 10px"}}>
        <img src={imgurl} alt="Product" height={300} width={300} />
        <div className="details" style={{color:"black",textDecoration:"none"}}>
          <h1>Xoami 12 pro</h1>
          <p>6GB RAM, 64GB,54mp camera, Black Body</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default productBox1
